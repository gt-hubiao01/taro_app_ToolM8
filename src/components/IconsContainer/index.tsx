import { PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import styles from './index.module.less'

const IconsContainer = ({ children }: PropsWithChildren) => {
  return <View className={styles.iconsContainer}>{children}</View>;
};

export default IconsContainer;
