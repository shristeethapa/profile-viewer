import { useState } from "react";
import ProfileCard from "./ProfileCard";
import "./ProfileGallery.css";
import ProfileViewer from "./ProfileViewer";

const users = [
  {
    name: "John Doe",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Jane Doe",
    title: "Market Specialist",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Jane Doe",
    title: "Market Specialist",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Jane Doe",
    title: "Market Specialist",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
  },
];

const galleryStyle = {
  display: "flex",
  gap: "5px",
  width: "100vw",
  flexWrap: "wrap",
};
const ProfileGallery = () => {
  const [showProfile, setShowProfile] = useState(false);

  const [selectedProfile, setSelectedProfile] = useState({
    name: "kripky",
    title: "Tester",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  });

  return (
    <div>
      <h1>Profile Gallery</h1>
      <div className="card">
        {users.map((item) => (
          <ProfileCard
            data={item}
            openSesame={setShowProfile}
            updateProfile={setSelectedProfile}
          />
        ))}
      </div>
      <button
        onClick={() => {
          setSelectedProfile({
            name: "TEST",
            title: "TESTER",
            image: "test",
          });
          setShowProfile(true);
        }}
      >
        CHANGE
      </button>
      {showProfile ? (
        <ProfileViewer
          {...selectedProfile}
          // name={selectedProfile.name}
          // title={selectedProfile.title}
          // image={selectedProfile.image}
          closeSesame={setShowProfile}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileGallery;
