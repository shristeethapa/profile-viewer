import React from "react";

const ProfileViewer = ({ name, title, image, closeSesame }) => {
  return (
    <div>
      <img src={image} />
      <h2>{name}</h2>
      <h5>{title}</h5>
      <button
        onClick={() => {
          closeSesame(false);
        }}
      >
        Close
      </button>
    </div>
  );
};

export default ProfileViewer;
