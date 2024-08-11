enum Membership {
  Simple,
  Standart,
  Premium,
}
const membership = Membership.Standart;

const membershipReverse = Membership[2];
console.log(membership);
console.log(typeof membership) //number
console.log(membershipReverse);
console.log(typeof membershipReverse)

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM;
console.log(social);