# item-flyinator
Animate Item to the cart.

This jQuery plugin adds a flying product effect after you added it into your shopping cart. 

#Usage
You need to add three classes to your html file in order for this to work.

First, add a class "cart-container" on your cart container.
  ```html
  <div class="cart-container">
    <span class="glyphicon glyphicon-shopping-cart"></span>&nbsp;Cart</a>
  </div>
  ```

Then add a class "product-container" on your product container 
  ```html
    <div class="product-container">
      <img src="/img/product-image.jpg">
      <div class="product-info">
        <div>Sunburst-MX08</div>
        <span class="add-to-cart"><a href="#">Add to cart</a></span>
      </div>
    </div>
  ```
  
  and last, add a class "add-to-cart" on your add to cart link
   ```html
    <span class="add-to-cart"><a href="#">Add to cart</a></span>
   ```
   
   NOTE
   
   Your add-to-cart element must be a descendant of the product-container element.
   
   sample codes.
  ```html
  <div class="product-container">
    <img src="/img/product-image.jpg">
    <div class="product-information">
      <span class="add-to-cart">Add to cart</span>
    </div>
  </div>
  
  ---------------------
  
  <div class="product-container">
    <img src="//product-image.jpg">
    <div class="product-information">
      Product Name
    </div>
    <span class="add-to-cart">Add to cart</span>
  </div>
  ```
  
# Demo
  http://lloydaaron.xyz/item-flyinator/
  http://codepen.io/elelowwaydi/pen/bpdGEb
