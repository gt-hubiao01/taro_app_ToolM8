import { View, Input, InputProps } from "@tarojs/components";
import styles from "./index.module.less";

const ProgressInput = (props: InputProps) => {
  return (
    <View className={styles.textInputWrapper}>
      <Input
        {...props}
        className={`${styles.textInput} ${props.className}`}
      />
    </View>
  );
};

export default ProgressInput;
