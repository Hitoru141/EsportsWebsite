import axios from "axios";
import { appSettings } from "../../Appdata/appdata";
import { toast } from "react-toastify";
import deleteImageHandler from "../deleteImageService";

export default function submitMember(memberData, profileURL) {
  return axios
    .post(`${appSettings.member}s`, memberData)
    .then((response) => {
      if (response.status === 201) {
        // Member Added Successfully
        toast.success("Member Added Successfully");

        console.log(response.data); // log the response message to the console
        return response.data;
      }
    })
    .catch(async (error) => {
      await deleteImageHandler(profileURL);
      if (error.response && error.response.status === 406) {
        toast.error("Member Name already exists");
      } else if (error.response && error.response.status === 500) {
        toast.error("Internal Server Error");
      } else {
        toast.error("Failed to add member");
      }
      throw error;
    });
}
