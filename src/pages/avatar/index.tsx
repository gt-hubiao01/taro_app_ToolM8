import { View, Button, Input, Image, Canvas } from "@tarojs/components";
import styles from "./index.module.less";
import { GlassContainer } from "@/components/GlassContainer";
import { useMemo, useState } from "react";
import { avatarModelMap } from "./utils";
import {processSvgToPngAndSave} from "@/utils/processSvgToPngAndSave"

export default function AvatarPage() {
  const [loading, setLoading] = useState(true);
  const [model, setModel] = useState(avatarModelMap.lorelei);
  const [seed, setSeed] = useState("");

  const handleConfirm = (e) => {
    setSeed(e.detail.value);
  };

  const handleChangeModel = (key: string) => {
    setModel(avatarModelMap[key]);
  };

  const url = useMemo(() => {
    setLoading(true);
    return `https://api.dicebear.com/9.x/${model}/svg?seed=${seed}`;
  }, [model, seed]);

  const handleImagLoad = () => {
    setLoading(false);
  };

  const handleDownload = () => {
    processSvgToPngAndSave(url);
  };

  return (
    <View className={styles.avatarPage}>
      <GlassContainer className={styles.avatarContainer}>
        {loading && <View className={styles.loading} />}
        <Image src={url} className={styles.avatar} onLoad={handleImagLoad} />
      </GlassContainer>
      <View className={styles.operate}>
        <Button className={styles.downloadBtn} onClick={handleDownload}>
          下载头像
        </Button>
        <Input
          className={styles.input}
          type='text'
          placeholder='请输入生成头像的随机seed'
          onConfirm={handleConfirm}
        />
      </View>
      <Canvas id='canvas' className={styles.canvas} type='2d' />

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
