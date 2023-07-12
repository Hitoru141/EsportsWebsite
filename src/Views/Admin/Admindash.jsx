import "../../Styles/admin.css";
const Admindash = (data) => {
  console.log(data);
  return (
    // <div className="Adminwrapper2">
    //   WELCOME ADMIN!
    //   <div className="adbtn-wrapper">
    //     <button className="adbtn">Carousel</button>
    //     <button className="adbtn">ADD TEAM</button>
    //     <button className="adbtn">ADD TEAM</button>
    //   </div>
    // </div>
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <a className="navbar-brand navbar-logo" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              <i className="fas fa-tachometer-alt"></i>Dashboard
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="javascript:void(0);">
              <i className="far fa-address-book"></i>Address Book
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              <i className="far fa-clone"></i>Components
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              <i className="far fa-calendar-alt"></i>Calendar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              <i className="far fa-chart-bar"></i>Charts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              <i className="far fa-copy"></i>Documents
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Admindash;
