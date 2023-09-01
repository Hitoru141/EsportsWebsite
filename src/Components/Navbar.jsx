/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "../Styles/main.css";
import { Link } from "react-router-dom";

// import appLogo from "../assets/white star.png";

const Navbar = ({ banner }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector(".nav").classList.add("affix");
        console.log("OK");
      } else {
        document.querySelector(".nav").classList.remove("affix");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      document.querySelector(".navTrigger").classList.toggle("active");
      console.log("Clicked menu");
      document.querySelector("#mainListDiv").classList.toggle("show_list");
      document.querySelector("#mainListDiv").style.display = "block";
    };

    document
      .querySelector(".navTrigger")
      .addEventListener("click", handleClick);

    return () => {
      document
        .querySelector(".navTrigger")
        .removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <Link to="/#">ASTRAEUS ESPORTS</Link>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/"> Community</Link>
              </li>
              <li>
                <Link to="/"> Careers</Link>
              </li>
            </ul>
          </div>
          <span className="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
      <section className="home">
        <img src={banner} className="home" />
      </section>
    </div>
  );
};

export default Navbar;
