import IconsContainer from "@/components/IconsContainer";
import IconButton from "@/components/IconButton";
import { View } from "@tarojs/components";
import styles from "./index.module.less";
import Taro from "@tarojs/taro";

export default function HomePage() {
  return (
    <View className={styles.homePage}>
      <View className={styles.title}>首页</View>
      <View className={styles.toolsContainer}>
        <IconsContainer>
          <IconButton
            name='转二维码'
            clickEvent={() => Taro.navigateTo({ url: "/pages/qrcode/index" })}
          />
        </IconsContainer>
      </View>
    </View>
  );
}
