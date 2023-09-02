import { getStorage, ref, deleteObject } from "firebase/storage";

const deleteImageHandler = (folderName, imageName) => {
  console.log(folderName);
  console.log(imageName);

  //   console.log(team.teamBannerURL);
  const storage = getStorage();
  const deleteImage = ref(storage, `${folderName}/${imageName}`);
  console.log(deleteImage);
};

export default deleteImageHandler;
