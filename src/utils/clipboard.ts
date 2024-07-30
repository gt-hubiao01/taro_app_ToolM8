import Taro from "@tarojs/taro";

export const handleCopyToClipboard = (textToCopy: string) => {
  Taro.setClipboardData({
    data: textToCopy,
    success: () => {
      Taro.showToast({
        title: "复制成功",
        icon: "success",
        duration: 2000,
      });
    },
    fail: (err) => {
      Taro.showToast({
        title: "复制失败",
        icon: "none",
        duration: 2000,
      });
      console.error("复制失败:", err);
    },
  });
};
