import { getLocalStorage, setLocalStorage } from "./utils.mjs";

/* function productDetailsTemplate(product) {
  const template = `<section class="product-detail"> 
  <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>

    <img class="divider" src="${product.Image}" alt="${product.NameWithoutBrand}" />
    
    <p class="product-card__price"><span class="product-card__discount">$${product.SuggestedRetailPrice}</span>$${product.FinalPrice} span class="flag-discount">sale </span</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">${product.DescriptionHtmlSimple}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>
  </section>`;
} */

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // once we have the product details we can render out the HTML
    this.renderProductDetails("main");
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from
    document.getElementById("addToCart")
    .addEventListener("click", this.addToCart.bind(this));
  }

  /* addToCart(){
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(this.product);
    setLocalStorage("so-cart", this.product);
  } */

  addToCart() {
    // get the cart items from local storage
    let cartItems = getLocalStorage("so-cart") || [];

    // add the current product to the cart
    cartItems.push(this.product);

    // set the cart items in local storage
    setLocalStorage("so-cart", cartItems);
  }

  renderProductDetails(selector) {
    const product = this.product;
    const element = document.querySelector(selector);
    const template = `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
        class="divider"
        src="${product.Image}"
        alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">
       <span class="product-card__discount">$${product.SuggestedRetailPrice} </span>
       $${product.FinalPrice}
       <span class="flag-discount">sale</span>
    </p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
        <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;

    element.insertAdjacentHTML("afterBegin", template);
  };
}
