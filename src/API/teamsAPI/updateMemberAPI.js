import axios from "axios";
import { appSettings } from "../../Appdata/appdata";

const updateMemberAPI = async (id, userData) => {
  const { data: response } = await axios.put(
    `${appSettings.member}/${id}`,
    userData
  );
  return response;
};

export default updateMemberAPI;
