import { atom } from "recoil";

const Token = atom({
  key: "userToken",
  default: sessionStorage.getItem("userToken") ?? null,
});

export default Token;
