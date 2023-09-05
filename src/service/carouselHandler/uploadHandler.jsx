import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { v4 } from "uuid";
import axios from "axios";
import { appSettings } from "../../Appdata/appdata";
import { toast } from "react-toastify";

const uploadHandler = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const uploadFile = () => {
    setIsLoading(true);
    if (imageUpload == null) return;

    const imageRef = ref(storage, `carousel/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        axios
          .post(appSettings.carousel, {
            img_link: url,
            name: imageUpload.name,
            path: imageRef.fullPath,
          })
          .then(() => {
            toast.success("Image uploaded successfully!");
            setTimeout(() => {
              window.location.reload();
            }, 5000);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);
          });
      });
    });
  };

  return {
    imageUpload,
    setImageUpload,
    uploadFile,
    description,
    setDescription,
    isLoading,
    setIsLoading,
  };
};

export default uploadHandler;
