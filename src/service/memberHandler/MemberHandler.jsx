export default function addMemberData(
  name,
  profileType,
  address,
  discord,
  facebook,
  twitch,
  profileImage,
  IGN
) {
  const newMemberData = {};

  if (name) {
    newMemberData.name = name;
  }
  if (profileType) {
    newMemberData.profileType = profileType;
  }
  if (address) {
    newMemberData.address = address;
  }
  if (discord) {
    newMemberData.discord = discord;
  }
  if (facebook) {
    newMemberData.facebook = facebook;
  }
  if (twitch) {
    newMemberData.twitch = twitch;
  }

  if (profileImage) {
    newMemberData.profileImage = profileImage;
  }

  if (IGN) {
    newMemberData.IGN = IGN;
  }

  return newMemberData;
}
