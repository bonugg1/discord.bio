const BADGES = [
  {
    name: "HypeSquad Bravery", // Message that will appear when hovering over the badge
    image: "assets/badges/hypesquad_bravery.svg",
  },
  {
    name: "Server boosting Jun 29, 2022",
    image: "assets/badges/boost.svg",
  },
  {
    name: "cool guy lol", // Message that appears when you hover over it
    image: "assets/badges/bug_hunter_level2.svg", // Icon (in .svg) of the badge that is in the "assets/badges" you choose
  },
];

const USER_ID = "986307077611847711"; // Your Discord Id Here | You need to join Lanyard Discord for it to work! [https://discord.gg/z2xW3zxYdt]
const BACKGROUND_IMAGE = "data:image/png;base64,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"; // Here is the background of the site, behind your profile
const STATUS = {
  dnd: {
    name: "Do not disturb", // Discord Status
    color: "#ed4245",
  },
  idle: {
    name: "Busy",
    color: "#faa81a",
  },
  online: {
    name: "Online",
    color: "#3ba55d",
  },
  offline: {
    name: "Offline",
    color: "#6e7985",
  },
};
