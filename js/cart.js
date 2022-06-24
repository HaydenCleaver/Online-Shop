/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

function clearCart() {
  
  let bodyEl = document.querySelector('tbody');

  while (bodyEl.hasChildNodes()){
    bodyEl.removeChild(bodyEl.firstChild);
  }
  
}

function showCart() {
  
  let bodyEl = document.querySelector('tbody');

  for (let i = 0; i < cart.items.length; i++){
    let rowEl = document.createElement('tr');
    bodyEl.appendChild(rowEl);
      
    let deleteEl = document.createElement('td');
    rowEl.appendChild(deleteEl);
    deleteEl.textContent = 'X';
    deleteEl.id = i;

    let dataEl = document.createElement('td');
    rowEl.appendChild(dataEl);
    dataEl.textContent = cart.items[i].quantity;
    
    let dataEl2 = document.createElement('td');
    rowEl.appendChild(dataEl2);
    dataEl2.textContent = cart.items[i].product;

  }
}

  

function removeItemFromCart(event) {
  cart.removeItem(parseInt(event.target.id));
  cart.saveToLocalStorage();
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
