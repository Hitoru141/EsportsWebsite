import axios from "axios";
import { appSettings } from "../../Appdata/appdata";
import { toast } from "react-toastify";

export default function submitMember(memberData) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${appSettings.member}s`, memberData)
      .then((response) => {
        if (response.status === 201) {
          // Member Added Successfully
          toast.success("Member Added Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          resolve(response.data);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          toast.error("Member Name already exists");
        } else if (error.response && error.response.status === 500) {
          // Internal Server Error
          toast.error("Internal Server Error");
        }
        reject(error);
      });
  });
}
