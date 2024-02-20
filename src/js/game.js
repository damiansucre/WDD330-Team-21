import { loadHeaderNavFooter, getParam } from "./utils.mjs";
import GameData from "./gameData.mjs";
import GameDetails from "./gameDetails.mjs";

loadHeaderNavFooter();

const gameId = getParam("game");
const gameData = new GameData();

const game = new GameDetails(gameId, gameData);

game.init();