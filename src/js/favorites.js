import { loadHeaderNavFooter } from "./utils.mjs";
import Favorites from "./favorites.mjs";

loadHeaderNavFooter();

const favorites = new Favorites(".favorites-list");

favorites.renderFavoritesContents();