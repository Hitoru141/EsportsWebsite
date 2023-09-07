import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Styles/admin.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useRecoilState } from "recoil";
import Token from "../../../Recoil/token";

const Admin = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [userToken, setUserToken] = useRecoilState(Token);
  const auth = getAuth();
  const nav = useNavigate();
  const onChangeHandle = (e) => {
    const newUser = { ...info };
    newUser[e.target.id] = e.target.value;
    setInfo(newUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        info.email,
        info.password
      );

      const token = await data.user.accessToken;
      if (token) {
        setUserToken(token);
        sessionStorage.setItem("userToken", token);
        nav("/astraadmin787/dashboard");
      } else {
        toast.error(`Missing token`);
      }
    } catch (err) {
      toast.error(`Incorrect Email or Password`);
    }
  };

  return (
    <div className="Adminwrapper">
      <ToastContainer />
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form">
          <div className="input-group">
            <label htmlFor="username" className="signin-p">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="email"
              placeholder=""
              onChange={(e) => {
                onChangeHandle(e);
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="signin-p">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="password"
              placeholder=""
              onChange={(e) => {
                onChangeHandle(e);
              }}
            />
            <div className="forgot">
              <a className="a5">Forgot Password ?</a>
            </div>
          </div>
          <button className="sign" onClick={handleSubmit}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
