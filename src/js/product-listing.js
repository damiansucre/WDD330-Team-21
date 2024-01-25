import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
//Import the header and footer
import { loadHeaderFooter, getParam } from "./utils.mjs";

const category = getParam("category");
const dataSource = new ProductData();
const list = new ProductListing(
  category,
  dataSource,
  document.querySelector(".product-list")
);

list.init();
//new code
loadHeaderFooter();
