import { atom } from "recoil";

const SelectedTeamAtom = atom({
  key: "selectedTeam",
  default: "",
});

export default SelectedTeamAtom;
