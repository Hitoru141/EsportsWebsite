import axios from "axios";
import { appSettings } from "../../Appdata/appdata";

const deleteMemberAPI = async (id) => {
  const { data: response } = await axios.delete(`${appSettings.member}/${id}`);
  return response;
};

export default deleteMemberAPI;
