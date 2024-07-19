import { View, Image } from "@tarojs/components";
import styles from "./index.module.less";
import defaultIcon from "@/assets/icons/defaultIcon.svg";

interface IProps {
  clickEvent?: (e) => void;
  icon?: string;
  name?: string;
  bgColor?: string;
}

const IconButton = ({ clickEvent, name, icon, bgColor }: IProps) => {
  return (
    <View className={styles.iconButton} style={{ background: bgColor }}>
      <View className={styles.iconContainer} onClick={clickEvent}>
        <Image src={icon || defaultIcon} className={styles.icon} />
      </View>
      {name && <View className={styles.name}>{name}</View>}
    </View>
  );
};

export default IconButton;
