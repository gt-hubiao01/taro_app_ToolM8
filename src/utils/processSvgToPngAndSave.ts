import Taro from '@tarojs/taro';
import { convertSvgToBase64 } from './convertSvgToBase64';
import { downloadBase64Image } from './downloadBase64Image';

async function downloadAndConvertSvgToBase64(url) {
  try {
    // 下载SVG文件
    const downloadResult = await Taro.downloadFile({ url });
    const { tempFilePath } = downloadResult;

    // 读取SVG文件内容
    const fs = Taro.getFileSystemManager();
    const svgContent = fs.readFileSync(tempFilePath, 'utf-8');

    return await convertSvgToBase64(svgContent);
  } catch (error) {
    console.error('下载或读取文件失败', error);
    return null;
  }
}


export async function processSvgToPngAndSave(url) {
  const base64Data = await downloadAndConvertSvgToBase64(url);
  if(base64Data) {
    await downloadBase64Image(base64Data);
  }
}

