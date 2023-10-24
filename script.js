$(".box") .click (function () {
    $ (".box") .removeClass ("active");
    $ (this) .addClass ("active");
});
const cartButtons = document.querySelectorAll('.add-to-cart');

cartButtons.forEach(button => {

  button.addEventListener('click', () => {
    
    alert('Item added to cart!');
    
  });

});
