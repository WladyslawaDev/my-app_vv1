import React, { FC, ReactNode } from "react";
import "./styles.css";

interface ProfileData {
  firstName: string;
  lastName: string;
  career: string;
  hairColor: string;
  hobby: string;
}

interface ProfileCardProps {
  profileData: ProfileData;
  imgSrc: string;
  children?: ReactNode;
}

const ProfileCard: FC<ProfileCardProps> = ({ profileData, imgSrc, children = <h1>User Card</h1> }) => {
  console.log(profileData);

  const normalizeFirstLastName = () => {
    return `${profileData.firstName} ${profileData.lastName}`;
  }

  return (
    <div className="profile-card">
      {children}
      <div className="avatar-control">
        <img
          className="profile-avatar"
          alt="Profile Avatar"
          src={imgSrc}
        />
      </div>
      <h2>{normalizeFirstLastName()}</h2>
      <p>Career: {profileData.career}</p>
      <p>Hair Color: {profileData.hairColor}</p>
      <p>Hobby: {profileData.hobby}</p>
    </div>
  );
}

export default ProfileCard;
