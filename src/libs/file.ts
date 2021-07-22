// import { createSignedUrl } from "src/mutations/image/CreateSignedUrlMutation";
import CryptoJS from "crypto-js";
import loadImage from "blueimp-load-image";
// import { createItemImage } from "src/mutations/article_image/CreateArticleImageMutation";

// ダイレクトアップロード
export const directUpload = (file) => {

  return new Promise(async (resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = function (fileEvent) {
      const binary = CryptoJS.lib.WordArray.create(fileEvent.target.result);
      const md5 = CryptoJS.MD5(binary);
      const checksum = md5.toString(CryptoJS.enc.Base64);
      fetch(`${process.env.NEXT_PUBLIC_HOST}/api/upload`).then(async (response) => {
        const data = await response.json()
        console.log(file)
        fetch(data.url, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
            // "Content-MD5": md5,
          },
        })
          .then((res) => {
            // resolve(response.createSignedUrl.blobSignedId);
            resolve(data.objectKey)
            console.log(res)
          })
          .catch((err) => {
            console.log(err);
          });
      }).catch((error) => {
        console.log(error)
      })

      // createSignedUrl(
      //   {
      //     file: {
      //       size: file.size,
      //       type: file.type,
      //       checksum: checksum,
      //     },
      //   },
      //   (response, errors) => {
      //     console.log(response)
      //     fetch(response.createSignedUrl.directUploadUrl, {
      //       method: "PUT",
      //       body: file,
      //       headers: {
      //         "Content-Type": response.createSignedUrl.contentType,
      //         "Content-MD5": response.createSignedUrl.contentMd5,
      //       },
      //     })
      //       .then((res) => {
      //         resolve(response.createSignedUrl.blobSignedId);
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //       });
      //     // setLoading(false);
      //   },
      //   (err) => console.log(err)
      // );
    };
  });
};


// サイズ変更
export const resizeImage = (file) => {
  return new Promise(async (resolve, reject) => {
    const canvas = await loadImage(file, {
      maxWidth: 1800,
      maxHeight: 1800,
      canvas: true,
    });
    canvas.image.toBlob((blob) => {
      resolve(blob);
    }, 'image/jpeg');
  });
};


// サイズ変更作成
// export const resizeCreate = (file) => {
//   return new Promise(async (resolve, reject) => {
//     const canvas = await loadImage(file, {
//       maxWidth: 1200,
//       canvas: true,
//     });
//     canvas.image.toBlob((blob) => {
//       resolve(blob);
//     }, file.type);
//   });
// };


// // サイズ変更更新
// export const resizeUpdate = async (file, articleId) => {
//   const canvas = await loadImage(file, {
//     maxWidth: 1200,
//     canvas: true,
//   });
//   canvas.image.toBlob(async (blob) => {
//     const articleBlobId = await directUpload(blob);
//     createArticleImage(
//       {
//         articleId: articleId,
//         articleBlobId: articleBlobId,
//       },
//       {},
//       (response, errors) => {},
//       (err) => console.log(err)
//     );
//   }, file.type);
// };