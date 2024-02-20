import { loadHeaderNavFooter, getParam } from "./utils.mjs";
import GameData from "./gameData.mjs";
import GameListing from "./gameList.mjs";
import PlatformListing from "./platformList.mjs";

loadHeaderNavFooter();

const category = getParam("platform");

const gameData = new GameData();
const gameList = new GameListing(
  gameData,
  document.querySelector(".game-list"),
  category
);

const platformList = new PlatformListing(
  document.querySelector(".platforms-list")
);

gameList.init();
platformList.init();