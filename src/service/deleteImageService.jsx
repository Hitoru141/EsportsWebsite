import { getStorage, ref, deleteObject } from "firebase/storage";

const deleteImageHandler = async (imageURL) => {
  const storage = getStorage();
  const deleteImage = ref(storage, imageURL);
  await deleteObject(deleteImage);
  return true;
};

export default deleteImageHandler;
