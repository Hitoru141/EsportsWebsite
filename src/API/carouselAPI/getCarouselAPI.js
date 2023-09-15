import axios from "axios";
import { appSettings } from "../../Appdata/appdata";

const getCarouselAPI = async () => {
  const { data: response } = await axios.get(`${appSettings.carousel}`);
  return response;
};

export default getCarouselAPI;
