import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ banner }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    // Close the mobile menu
    setIsMobileMenuOpen(false);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector(".nav").classList.add("affix");
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
    document
      .querySelector(".navTrigger")
      .addEventListener("click", handleMobileMenuToggle);

    // Clean up the event listener
    return () => {
      document
        .querySelector(".navTrigger")
        .removeEventListener("click", handleMobileMenuToggle);
    };
  }, []);

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <Link to="/#" onClick={handleNavLinkClick}>
              ASTRAEUS ESPORTS
            </Link>
          </div>
          <div
            id="mainListDiv"
            className={`main_list ${isMobileMenuOpen ? "show_list" : ""}`}
          >
            <ul className="navlinks">
              <li>
                <Link to="/about" onClick={handleNavLinkClick}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/community" onClick={handleNavLinkClick}>
                  Community
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleNavLinkClick}>
                  Careers
                </Link>
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
        <img src={banner} className="home" alt="Banner" />
      </section>
    </div>
  );
};

export default Navbar;
