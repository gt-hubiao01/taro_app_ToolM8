import Taro from "@tarojs/taro";
import saveImage from "./saveImage";

export const downloadBase64Image = async (base64Image) => {
  try {
    // 将 base64 转换为 ArrayBuffer
    const base64Data = Taro.base64ToArrayBuffer(base64Image.split(",")[1]);
    const fs = Taro.getFileSystemManager();
    const filePath = `${Taro.env.USER_DATA_PATH}/${Date.now().toString()}.png`;

    // 写入文件
    await new Promise((resolve, reject) => {
      fs.writeFile({
        filePath,
        data: base64Data,
        encoding: "binary",
        success: resolve,
        fail: reject,
      });
    });

    // 保存到相册
    saveImage(filePath);

  } catch (error) {
    console.error("下载过程中发生错误", error);
    Taro.showToast({
      title: "下载失败",
      icon: "none",
    });
  }
};
