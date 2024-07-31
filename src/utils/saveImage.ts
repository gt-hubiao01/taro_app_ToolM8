import Taro from "@tarojs/taro";

const saveImage = (path: string) => {
  Taro.saveImageToPhotosAlbum({
    filePath: path,
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
};

export default saveImage;