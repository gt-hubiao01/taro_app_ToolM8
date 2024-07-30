import { createAvatar } from "@dicebear/core";
import { View, Button, Input, Image } from "@tarojs/components";
import styles from "./index.module.less";
import { GlassContainer } from "@/components/GlassContainer";
import { useEffect, useState } from "react";
import { avatarModelMap } from "./utils";
import { downloadBase64Image } from "@/utils/downloadBase64Image";

export default function AvatarPage() {
  const [img, setImg] = useState<string>("");
  const [model, setModel] = useState<any>(avatarModelMap.lorelei);
  const [seed, setSeed] = useState<string>("");

  const handleConfirm = (e) => {
    setSeed(e.detail.value);
  };

  const handleDownload = () => {
    if (!img) return;
    downloadBase64Image(img);
  };

  const handleChangeModel = (key: string) => {
    setModel(avatarModelMap[key]);
  };

  useEffect(() => {
    const avatar = createAvatar(model, {
      seed,
    });
    setImg(avatar.toDataUri());
  }, [model, seed]);

  return (
    <View className={styles.avatarPage}>
      <GlassContainer className={styles.avatarContainer}>
        {img && <Image src={img} className={styles.avatar} />}
        <Button className={styles.downloadBtn} onClick={handleDownload}>
          下载头像
        </Button>
      </GlassContainer>
      <Input
        className={styles.input}
        type='text'
        placeholder='请输入生成头像的随机seed'
        onConfirm={handleConfirm}
      />

      <GlassContainer className={styles.modelsContainer}>
        {Object.keys(avatarModelMap).map((key) => (
          <Button
            className={styles.modelBtn}
            key={key}
            onClick={() => {
              handleChangeModel(key);
            }}
          >
            {key}
          </Button>
        ))}
      </GlassContainer>
    </View>
  );
}
