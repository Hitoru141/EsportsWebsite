import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import postCarouselAPI from "src/API/carouselAPI/postCarouselAPI";

const uploadHandler = async (imageUpload) => {
  try {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `carousel/${imageUpload.name + v4()}`);
    const uploadedData = await uploadBytes(imageRef, imageUpload).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
          const data = {
            img_link: url,
            name: imageUpload.name,
            path: imageRef.fullPath,
          };
          await postCarouselAPI(data).then(() => {
            toast.success("Image uploaded successfully!");
          });
        });
      }
    );
    //Upload the data

    return uploadedData;
  } catch (error) {
    console.error(error);
  }
};

export default uploadHandler;
