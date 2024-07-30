import { Button, ButtonProps, Text } from "@tarojs/components";
import { PropsWithChildren } from "react";
import styles from "./index.module.less";

const ClickButton = (props: PropsWithChildren<ButtonProps>) => {
  const { children, ...restProps } = props;

  return (
    <Button
      {...restProps}
      className={`${styles.clickButton} ${props.className}`}
    >
    {children}
  </Button>
  );
};

export default ClickButton;
