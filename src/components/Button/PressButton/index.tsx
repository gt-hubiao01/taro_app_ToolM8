import { Button, ButtonProps } from "@tarojs/components";
import { PropsWithChildren } from "react";
import styles from "./index.module.less";

const PressButton = (props: PropsWithChildren<ButtonProps>) => {
  const { children, ...restProps } = props;

  return (
    <Button
      {...restProps}
      className={`${styles.pressButton} ${props.className}`}
    >
      {children}
    </Button>
  );
};

export default PressButton;
