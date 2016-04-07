/*
  item-flyinator
  github.com/elelowwaydi
  twitter.com/elelowwaydi
*/
const $cart = $('.cart-container');
const $addToCart = $('.add-to-cart');
$addToCart.click(function() {
  const $item = $(this).parents(".product-container").find("img");
  const $itemClone = $item.clone()
    .offset({
      top: $item.offset().top,
      left: $item.offset().left
    })
    .css({
      'position': 'absolute',
      'height': $item.height(),
      'width': $item.width(),
      'z-index': '2000',
      'opacity': '.7'
    })
    .appendTo($('body'))
    .animate({
      'top': $cart.offset().top + 10,
      'left': $cart.offset().left + 30,
      'width': $item.width() / 10,
      'height': $item.height()/10
    }, 1000);
  $itemClone.animate({
    'width': 0,
    'height': 0
  }, function() {
    $(this).detach()
  });
});
