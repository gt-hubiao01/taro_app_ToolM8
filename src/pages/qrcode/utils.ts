import QR from "qrcode-base64";
import Taro from "@tarojs/taro";

export const getImageData = (inputText) => {
  const imageData = QR.drawImg(inputText, {
    typeNumber: 4,
    errorCorrectLevel: "M",
    size: 100,
  });

  return imageData;
};

export const handleScanQRCode =  (callBack) => {

  Taro.scanCode({
    success: (res) => {
      callBack(res)
      Taro.showToast({
        title: "扫描成功",
        icon: "success",
        duration: 2000,
      });
    },
    fail: (err) => {
      console.error("扫描失败:", err);
      Taro.showToast({
        title: "扫描失败",
        icon: "none",
        duration: 2000,
      });
    },
  });
};
