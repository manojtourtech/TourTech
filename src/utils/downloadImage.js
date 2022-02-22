import RNFetchBlob from 'rn-fetch-blob';

import {updateFileDownloadStatus} from '../database/local_patient_db';

export const downloadImage = async (uri, id) => {
  console.log('fileName >>>>>>>>>>>>>>>>>>>>>>>>>>', uri);
  const extentionArray = uri.split('.');
  const extention = extentionArray[extentionArray.length - 1];
  const date = new Date();

  const {config, fs} = RNFetchBlob;
  let PictureDir = fs.dirs.PictureDir;
  let filePath = `${PictureDir}/${extention}_${Math.floor(
    date.getTime() + date.getSeconds() / 2,
  )}.${extention}`;

  let options = {
    fileCache: true,
    addAndroidDownloads: {
      //Related to the Android only
      useDownloadManager: true,
      notification: false,
      path: filePath,
      description: 'Image',
    },
  };
  config(options)
    .fetch('GET', 'http://147.234.84.37:3000/attachments/' + uri)
    .then(res => {
      //Showing alert after successful downloading
      console.log('res ->> ', filePath);
      console.log('res -> ', JSON.stringify(res));
      updateFileDownloadStatus(id, filePath);
      //alert('Image Downloaded Successfully.');
    })
    .catch(error => {
      console.log('Error in download', error);
    });
};
