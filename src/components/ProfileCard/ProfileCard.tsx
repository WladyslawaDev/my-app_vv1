import { ProfileCardContainer, AvatarControl, ProfileAvatar } from './styles';
import { ProfileCardProps } from './types';

function ProfileCard({
  profileData,
  imgSrc,
  children = <h1>User Card</h1>,
}: ProfileCardProps) {
  const normalizeFirstLastName = () => {
    return `${profileData.firstName} ${profileData.lastName}`;
  };

  return (
    <ProfileCardContainer>
      {children}
      <AvatarControl>
        <ProfileAvatar alt="Profile Avatar" src={imgSrc} />
      </AvatarControl>
      <h2>{normalizeFirstLastName()}</h2>
      <p>Career: {profileData.career}</p>
      <p>Hair Color: {profileData.hairColor}</p>
      <p>Hobby: {profileData.hobby}</p>
    </ProfileCardContainer>
  );
}

export default ProfileCard;


