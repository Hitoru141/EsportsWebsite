import { getStorage, ref, deleteObject } from "firebase/storage";

const deleteImageHandler = (folderName, imageURL) => {
  console.log(folderName);
  console.log(imageName);
  const imageName = imageURL.split("/").pop();
  console.log(imageName);

  //   console.log(team.teamBannerURL);
  //   const storage = getStorage();
  //   const deleteImage = ref(storage, `${folderName}/${imageName}`);
  //   console.log(deleteImage);
};

export default deleteImageHandler;
