# item-flyinator
fly items to cart(This jQuery plugin won't give wings to your products)

#Installation
Include the library to your html file
<pre><script src="https://rawgit.com/elelowwaydi/item-flyinator/master/item-flyinator.js"></script></pre>

#Usage
You need to add three class to your html file in order for this to work.

First, add a class "cart-container" on your cart container.
  ```html
  <div class="cart-container">
    <span class="glyphicon glyphicon-shopping-cart"></span>&nbsp;Cart</a>
  </div>
  ```

Then add a class "product-container" on your product container 
  <pre>
    <div class="product-container">
      <img src="https://res.cloudinary.com/dbty1hpdt/image/upload/c_scale,h_195,w_195/v1456668562/Music Store/Sunburst-MX08.jpg">
      <div class="product-info">
        <div>Sunburst-MX08</div>
        <span class="add-to-cart"><a href="#">Add to cart</a></span>
      </div>
    </div>
  </pre>
  
  and last, add a class "add-to-cart" on your add to cart link
   <pre>
    <span class="add-to-cart"><a href="#">Add to cart</a></span>
   </pre>
