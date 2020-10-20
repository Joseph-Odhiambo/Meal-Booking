// show cart

(function(){  
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');


    cartInfo.addEventListener('click', function(){
    cart.classList.toggle('show-cart');  
    })
})();

// add items to cart

(function(){
  const cartBtn = document.querySelectorAll('.store-item-icon');
  cartBtn.forEach(function(btn){
  btn.addEventListener('click', function(event){
      // console.log(event.target);

      if (event.target.parentElement.classList.contains('store-item-icon'))
      {
        let fullPath=
        event.target.parentElement.previousElementSibling.src;   
        let pos = fullPath.indexOf('img') + 3;
        let partpath = fullPath.slice(pos);

        const item = {};
        item.img = `img-cart$(partpath)`;
        let name =
          event.target.parentElement.parentElement.nextElementSibling
          .children[0].children[0].textContent;
          item.name = name;
          let price =
          event.target.parentElement.parentElement.nextElementSibling
          .children[0].children[1].textContent;
          let finalprice = price.slice(1).trim();
          item.price = finalprice;
          // item.price =price
        //    console.log(price);


        console.log(item);


        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3' );

        cartItem.innerHTML = `

          <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
          <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>`;
          

        // select  cart 
        const cart = document.getElementById('cart');
        const total = document.querySelector('.cart-total-container');

        cart.insertBefore(cartItem, total);
        alert('Item added to cart successfully!')
        showTotals();



      }
    })    
  })

  function  showTotals(){
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function(item){
    total.push(parseFloat(item.textContent));   
    });
    console.log(total);

    const totalMoney = total.reduce(function(total,item){
    total += item; 
    return total;    
    },0);
    const finalMoney = totalMoney.toFixed(2);
    console.log(totalMoney);

    document.getElementById('cart-total').textContent = finalMoney;
    document.getElementById('.item-total').textContent = finalMoney;
    document.getElementById('cart-count').textContent = total.length;



  }
})();
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".js-scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});