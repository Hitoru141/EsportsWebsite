import { useState } from "react";
import PropTypes from "prop-types";

const UpdateTeamModal = ({ team, onUpdate, onClose }) => {
  const [updatedName, setUpdatedName] = useState(team.name);

  const handleNameChange = (e) => {
    setUpdatedName(e.target.value);
  };

  const handleUpdate = () => {
    // You can perform the update logic here and call the onUpdate function
    onUpdate(team, updatedName);
    onClose();
  };

  return (
    <div className="addteam-modal-overlay">
      <div className="addteam-modal">
        <div className="adtX" onClick={onClose}>
          &times;
        </div>
        <h2 className="adt-h2">Update Team</h2>
        <input
          placeholder="Team Name"
          type="text"
          value={updatedName}
          onChange={handleNameChange}
          className="adtinput"
        />
        {/* You can include other fields for updating team information here */}
        <div className="adtsavebtn" onClick={handleUpdate}>
          <p className="adtp1">Update</p>
        </div>
      </div>
    </div>
  );
};

UpdateTeamModal.propTypes = {
  team: PropTypes.object.isRequired, // The team object you want to update
  onUpdate: PropTypes.func.isRequired, // Function to handle the update
  onClose: PropTypes.func.isRequired, // Function to close the modal
};

export default UpdateTeamModal;
