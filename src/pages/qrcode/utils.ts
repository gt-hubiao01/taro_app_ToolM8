import QR from "qrcode-base64";

export const getImageData = (inputText) => {
  const imageData = QR.drawImg(inputText, {
    typeNumber: 4,
    errorCorrectLevel: "M",
    size: 100,
  });

  return imageData;
};
