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

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}
let clearEl = document.querySelectorAll('tr');
  clearEl.forEach(function(tr){
    clearEl.remove;
  });

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
let cartEl = document.querySelector('tbody');

for (let i = 0; i < cart.items.length; i++) {
  let rowEl = document.createElement('tr');
  cartEl.appendChild(rowEl);
  let newDataCell = document.createElement('td');
  rowEl.appendChild(newDataCell);

  newDataCell.textContent = 'delete-link';
  newDataCell.id = i;
  newDataCell.addEventListener('click', removeItemFromCart());
  console.log(cart.items);
  
  let quantityCell = document.createElement('td');
  rowEl.appendChild(quantityCell);
  quantityCell.textContent = cart.items[i].quantity;

  let productNameCell = document.createElement('td');
  rowEl.appendChild(productNameCell);
  productNameCell.textContent = cart.items[i].product;
// for (let x = 0; x < cart.items.length; x++) {
//   console.log(x,'deletelink');
// }

// for (let y = 0; y < cart.items.length; y++) {
//   console.log(y,'qualtity');
// }

// for (let z = 0; z < cart.items.length; z++) {
//   console.log(z,'item');
// }
};






  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  cart.removeItem(parseInt(event.target.id));
  cart.saveToLocalStorage();
  renderCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
