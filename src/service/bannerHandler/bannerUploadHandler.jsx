import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { v4 } from "uuid";

const bannerUploadHandler = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [bannerURL, setBannerURL] = useState("");

  const uploadFile = () => {
    setIsLoading(true);
    if (imageUpload == null) return;

    const imageRef = ref(storage, `teamBanner/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // WINDOW ALERT IF BANNER UPLOAD IS SUCCESSFUL
        window.alert("Banner Uploaded Successfully");
        setIsLoading(false);
        setBannerURL(url);
        return url;
      });
    });
  };

  return {
    imageUpload,
    setImageUpload,
    uploadFile,
    isLoading,
    setIsLoading,
    bannerURL,
    setBannerURL,
  };
};

export default bannerUploadHandler;
