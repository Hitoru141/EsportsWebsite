import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { v4 } from "uuid";

const logoUploadHandler = () => {
  const [imageUpload, LOGO_setImageUpload] = useState(null);
  const [LOGO_isLoading, setLOGO_isLoading] = useState(false);
  const [logoURL, setlogoURL] = useState("");

  const LOGO_uploadFile = () => {
    setLOGO_isLoading(true);
    if (imageUpload == null) return;

    const imageRef = ref(storage, `teamLogo/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // WINDOW ALERT IF BANNER UPLOAD IS SUCCESSFUL
        window.alert("Logo Uploaded Successfully");
        setLOGO_isLoading(false);
        setlogoURL(url);
        return url;
      });
    });
  };

  return {
    imageUpload,
    LOGO_setImageUpload,
    LOGO_uploadFile,
    LOGO_isLoading,
    setLOGO_isLoading,
    logoURL,
    setlogoURL,
  };
};

export default logoUploadHandler;
