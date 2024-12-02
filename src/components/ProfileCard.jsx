import React from "react";
const ProfileCard = (inputObject) => {
  console.log(400, inputObject);
  const { data, openSesame, updateProfile } = inputObject;
  const item = data;

  const OpenProfileViewer = () => {
    // alert("open viewer");
    openSesame(true);

    // update selected profile
    updateProfile({
      name: item.name,
      title: item.title,
      image: item.image,
    });
  };

  return (
    <div>
      <img src={item.image} />
      <div>{item.name}</div>
      <div>{item.title}</div>
      <button onClick={OpenProfileViewer}>View Profile</button>
    </div>
  );
};

export default ProfileCard;
