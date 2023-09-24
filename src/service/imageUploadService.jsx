import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";

const UploadHandler = (imageUpload, path) => {
  return new Promise((resolve, reject) => {
    if (imageUpload == null) {
      reject("No image selected");
      return;
    }

    const imageRef = ref(storage, `${path}/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            // WINDOW ALERT IF IMAGE UPLOAD IS SUCCESSFUL
            // console.log("Image Uploaded Successfully");
            resolve(url);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default UploadHandler;
