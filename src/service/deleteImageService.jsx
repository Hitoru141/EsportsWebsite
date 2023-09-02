import { getStorage, ref, deleteObject } from "firebase/storage";

const deleteImageHandler = (imageURL) => {
  const storage = getStorage();
  const deleteImage = ref(storage, imageURL);
  deleteObject(deleteImage);
};

export default deleteImageHandler;
