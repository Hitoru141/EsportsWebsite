{
  updateModalStates[index] && (
    <div className="adtmodal-overlay">
      <div className="adtmodal">
        <div className="adtX" onClick={closeModal}>
          &times;
        </div>
        <h2 className="adt-h2">Update Team</h2>
        <input
          placeholder="Team Name"
          type="text"
          required=""
          className="adtinput"
        />
        <div className="adt-img">
          {imagePreview ? (
            <>
              <button className="add-button">
                <label htmlFor="imageInput">Reupload Team Logo</label>
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </button>
              <div className="image-preview">
                <img
                  src={imagePreview}
                  alt="Uploaded Team Logo"
                  className="adtimg"
                />
              </div>
            </>
          ) : (
            <button className="add-button">
              <label htmlFor="imageInput">Upload Team Logo</label>
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </button>
          )}
        </div>
        <div className="adtsavebtn" onClick={handleAddTeam}>
          Update
        </div>
      </div>
    </div>
  );
}
