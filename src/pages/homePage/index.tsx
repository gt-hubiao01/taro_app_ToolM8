import IconsContainer from "@/components/IconsContainer";
import IconTool from "@/components/IconTool";
import { View } from "@tarojs/components";
import styles from "./index.module.less";
import Taro from "@tarojs/taro";
import QRCode from "@/assets/icons/QRCode.svg";
import avatar from "@/assets/icons/avatar.svg";
import { GlassContainer } from "@/components/GlassContainer";

export default function HomePage() {
  return (
    <View className={styles.homePage}>
      <View className={styles.title}>首页</View>
      <View className={styles.toolsContainer}>
        <GlassContainer>
          <IconsContainer>
            <IconTool
              icon={QRCode}
              name='转二维码'
              clickEvent={() => Taro.navigateTo({ url: "/pages/qrcode/index" })}
            />

            <IconTool
              icon={avatar}
              name='头像生成'
              clickEvent={() => Taro.navigateTo({ url: "/pages/avatar/index" })}
            />
          </IconsContainer>
        </GlassContainer>
      </View>
    </View>
  );
}
