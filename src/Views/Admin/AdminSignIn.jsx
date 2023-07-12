import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/admin.css";
import axios from "axios";

const Admin = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const nav = useNavigate();

  const onChangeHandle = (e) => {
    const newUser = { ...info };
    newUser[e.target.id] = e.target.value;
    setInfo(newUser);
    console.log(info);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await axios.post(
      "https://esportsbackend-ugit.onrender.com/api/auth/signin",
      info
    );
    // nav("/astraadmin787/dashboard", data);
  };

  return (
    <div className="Adminwrapper">
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
          {/* <Link to="/astraadmin787/dashboard"> */}
          <button className="sign" onClick={handleSubmit}>
            Sign in
          </button>
          {/* </Link> */}
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="signin-p1">Google Sign In</p>
          <div className="line"></div>
        </div>
        <div className="social-icons">
          <button aria-label="Log in with Google" className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        {/* <p className="signup">
          Dont have an account?
          <a rel="noopener noreferrer" href="#" className="">
            Sign up
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Admin;
