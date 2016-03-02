# item-flyinator
fly items to cart.(This jQuery plugin won't give wings to your products)

#Installation
Include the script to your html file
```html
<script src="https://rawgit.com/elelowwaydi/item-flyinator/master/item-flyinator.js"></script>
```
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
      <img src="https://res.cloudinary.com/dbty1hpdt/image/upload/c_scale,h_195,w_195/v1456668562/Music Store/Sunburst-MX08.jpg">
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
   
   Your add-to-cart element must be placed under the product-container element.
   sample codes.
  ```html
  <div class="product-container">
    <img src="//your-image">
    <div class="product-information">
      <span class="add-to-cart">Add to cart</span>
    </div>
  </div>
  
  ---------------------
  
  <div class="product-container">
    <img src="//your-image">
    <div class="product-information">
      Product Name
    </div>
    <span class="add-to-cart">Add to cart</span>
  </div>
  ```
