import Taro from "@tarojs/taro";

export const convertSvgToBase64 = (svgContent) => {
  return new Promise((resolve, reject) => {
    // 创建Canvas上下文
    const query = Taro.createSelectorQuery();
    query.select('#canvas').node().exec((res) => {
      const canvas = res[0].node;
      const ctx = canvas.getContext('2d');

      // 设置Canvas的尺寸
      const canvasWidth = 500;
      const canvasHeight = 500;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // 创建Image对象来加载SVG
      const img = canvas.createImage();
      img.src = 'data:image/svg+xml,' + encodeURIComponent(svgContent);

      img.onload = function() {
        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

        // 导出为Base64
        const base64 = canvas.toDataURL('image/png');
        resolve(base64); // 返回base64数据
      };

      img.onerror = function(err) {
        console.error("图片加载出错", err);
        reject(err);
      };
    });
  });
}
