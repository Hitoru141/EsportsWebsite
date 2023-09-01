import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import axios from "axios";

const uploadHandler = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getCurrentDateTime = () => {
    const now = new Date();
    const formattedDate = `${now.getDate()}:${
      now.getMonth() + 1
    }:${now.getFullYear()}`;
    const formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    return formattedDate + ":" + formattedTime;
  };

  const uploadFile = () => {
    setIsLoading(true);
    if (imageUpload == null) return;
    const imageRef = ref(storage, `carousel/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        axios
          .post("https://astraeus-firebase-endpoints.onrender.com/carousel", {
            img_link: url,
            name: getCurrentDateTime(),
            path: imageRef.fullPath,
          })
          .then(() => {
            alert("Added to Firebase Firestore/Storage successfully!");
            setIsLoading(false);
            window.location.reload();
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
    getCurrentDateTime,
    setIsLoading,
  };
};

export default uploadHandler;
