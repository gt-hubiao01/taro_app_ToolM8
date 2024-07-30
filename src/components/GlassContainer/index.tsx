import { View } from "@tarojs/components";
import styles from "./index.module.less";
import { PropsWithChildren } from "react";

export function GlassContainer ({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <View className={`${styles.glassContainer}  ${className || ''}`}>
      {children}
    </View>
  );
}