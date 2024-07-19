import Taro from "@tarojs/taro";

export const downloadBase64Image = async (base64Image) => {
  try {
    // 将 base64 转换为 ArrayBuffer
    const base64Data = Taro.base64ToArrayBuffer(base64Image.split(",")[1]);
    const fs = Taro.getFileSystemManager();
    const filePath = `${Taro.env.USER_DATA_PATH}/temp_qr_image.png`;

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
    await Taro.saveImageToPhotosAlbum({
      filePath,
      success() {
        Taro.showToast({
          title: "保存成功",
          icon: "success",
        });
      },
      fail(err) {
        console.error("保存失败", err);
        Taro.showToast({
          title: "保存失败",
          icon: "none",
        });
      },
    });
  } catch (error) {
    console.error("下载过程中发生错误", error);
    Taro.showToast({
      title: "下载失败",
      icon: "none",
    });
  }
};
