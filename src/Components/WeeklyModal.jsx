// import React, { useEffect, useRef, useState } from "react";
// import QRCode from "qrcode";

// const WeeklyModal = ({ closeModal }) => {
//   const qrCodeRef = useRef();
//   const [link, setLink] = useState("https://www.google.com/forms/about/");

//   useEffect(() => {
//     QRCode.toDataURL(link, (err, url) => {
//       qrCodeRef.current.src = url;
//     });
//   }, [link]);

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(link);
//       alert("Link copied to clipboard!");
//     } catch (err) {
//       console.error("Failed to copy text: ", err);
//     }
//   };

//   const handleInputChange = (e) => {
//     setLink(e.target.value);
//   };

//   return (
//     <div className="weekly-modal-overlay">
//       <div className="weekly-modal">
//         <div className="exit_btn" onClick={closeModal}>
//           X
//         </div>
//         <h2 className="h2-weekly">Copy link or scan using the QR code below</h2>
//         <div className="input-group-weekly">
//           <input
//             type="text"
//             className="weekly-input"
//             placeholder="uiverse@verse.io"
//             value={link}
//             onChange={handleInputChange}
//           />
//           <button className="weeklybtn-submit" onClick={copyToClipboard}>
//             Copy link
//           </button>
//         </div>
//         <img ref={qrCodeRef} alt="QR Code" className="weekly-qr" />
//       </div>
//     </div>
//   );
// };

// export default WeeklyModal;
