import Playercard from "../../Components/Playercard";

const ManageMmbrs = () => {
  return (
    <div className="mteam_wrapper">
      <div className="adt_teambanner">
        <button className="cssbuttons-io-button">
          <svg
            viewBox="0 0 640 512"
            fill="white"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
          </svg>
          <span>Upload Team Banner</span>
        </button>
      </div>
      <button className="admemberbtn">
        <span className="span">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 23 21"
            height="21"
            width="23"
            className="svg-icon"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="black"
              d="M1.97742 19.7776C4.45061 17.1544 7.80838 15.5423 11.5068 15.5423C15.2053 15.5423 18.5631 17.1544 21.0362 19.7776M16.2715 6.54229C16.2715 9.17377 14.1383 11.307 11.5068 11.307C8.87535 11.307 6.74212 9.17377 6.74212 6.54229C6.74212 3.91082 8.87535 1.77759 11.5068 1.77759C14.1383 1.77759 16.2715 3.91082 16.2715 6.54229Z"
            ></path>
          </svg>
        </span>
        <span className="lable">Add Member</span>
      </button>
      <div className="adt_addplayerwrap">
        <Playercard />
        <Playercard />
        <Playercard />
        <Playercard />
        <Playercard />
        <Playercard />
      </div>
    </div>
  );
};

export default ManageMmbrs;
