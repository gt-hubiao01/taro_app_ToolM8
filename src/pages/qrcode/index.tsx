import { View, Image } from "@tarojs/components";
import styles from "./index.module.less";
import { useState } from "react";
import { downloadBase64Image } from "@/utils/downloadBase64Image";
import { getImageData } from "./utils";
import { ProgressInput } from "@/components/Input";
import { PressButton } from "@/components/Button";
import Taro from "@tarojs/taro";

export default function QRCode() {
  const [inputText, setInputText] = useState("");
  const [qrImage, setQrImage] = useState("");

  const [showQrCode, setShowQrCode] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const generateQRCode = () => {
    if (!inputText) {
      Taro.showToast({
        title: '输入不能为空',
        icon: 'error',
        duration: 1000
      })
      return
    }

    const imageData = getImageData(inputText);
    setQrImage(imageData);
  };

  const hideQrCode = () => {
    setShowQrCode(false);
  };

  const displayQrCode = () => {
    setShowQrCode(true);
  };

  const downloadQRCode = () => {
    downloadBase64Image(qrImage);
  };

  return (
    <View className={styles.qrcode}>
      <ProgressInput
        type='text'
        placeholder='请输入字符串生成二维码'
        value={inputText}
        onInput={handleInputChange}
      />
      <PressButton className={styles.generateButton} onClick={generateQRCode}>生成二维码</PressButton>
      {qrImage && showQrCode && (
        <Image src={qrImage} className={styles.qrImage} />
      )}
      <View className={styles.operateBtns}>
      {showQrCode ? (
        qrImage ? (
          <PressButton onClick={hideQrCode}>隐藏二维码</PressButton>
        ) : null
      ) : (
        <PressButton onClick={displayQrCode}>显示二维码</PressButton>
      )}

      {qrImage && (
        <PressButton onClick={downloadQRCode}>下载二维码</PressButton>
      )}
      </View>
      
    </View>
  );
}
