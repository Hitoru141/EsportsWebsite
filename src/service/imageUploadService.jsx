import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";

const UploadHandler = () => {
  const [bannerFile, setBannerFile] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const uploadFile2 = (imageUpload, path) => {
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
              console.log("Image Uploaded Successfully");
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

  return {
    uploadFile2,
    logoFile,
    setLogoFile,
    bannerFile,
    setBannerFile,
    uploading,
    setUploading,
  };
};

export default UploadHandler;
