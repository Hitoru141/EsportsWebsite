import axios from "axios";
import { appSettings } from "../../Appdata/appdata";

const updateMemberAPI = async (id, memberData, image) => {
  const { data: response } = await axios.put(`${appSettings.member}/${id}`, {
    ...memberData,
    profileImageURL: image,
  });
  console.log(image);
  return response;
};

export default updateMemberAPI;
