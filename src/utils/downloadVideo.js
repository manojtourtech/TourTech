import RNFetchBlob from 'rn-fetch-blob';

import {updateFileDownloadStatus} from '../database/local_patient_db';

export const downloadVideo = async (uri, id) => {
  console.log('fileName >>>>>>>>>>>>>>>>>>>>>>>>>>', uri);
  const date = new Date();

  const {config, fs} = RNFetchBlob;
  let _dir = fs.dirs.DownloadDir;
  let filePath =
    _dir +
    '/video_' +
    Math.floor(date.getTime() + date.getSeconds() / 2) +
    '.mp4';

  let options = {
    fileCache: true,
    addAndroidDownloads: {
      //Related to the Android only
      useDownloadManager: true,
      notification: false,
      path: filePath,
      description: 'Video',
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
