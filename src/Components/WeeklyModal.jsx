import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode.react";

const WeeklyModal = ({ closeModal }) => {
  const [link, setLink] = useState("https://www.google.com/forms/about/");

  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="weekly-modal-overlay">
      <div className="weekly-modal">
        <div className="exit_btn" onClick={closeModal}>
          X
        </div>
        <h2 className="h2-weekly">Copy link or scan using the QR code below</h2>
        <div className="input-group-weekly">
          <input
            type="text"
            className="weekly-input"
            placeholder="uiverse@verse.io"
            value={link}
            onChange={handleInputChange}
          />
          <button
            className="weeklybtn-submit"
            onClick={() => {
              // You can handle copying to clipboard here if needed
              alert("Link copied to clipboard!");
            }}
          >
            Copy link
          </button>
        </div>
        {/* Use qrcode.react component with value prop for generating QR code */}
        <QRCode value={link} className="weekly-qr" />
      </div>
    </div>
  );
};

export default WeeklyModal;
