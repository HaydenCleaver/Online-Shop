/* global Product, Cart */

'use strict';
// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  let parentElement = document.getElementById('items');
  for (let i = 0; i < Product.allProducts.length; i++ ) {
    let option = document.createElement('option');
    parentElement.appendChild(option);
    option.textContent = Product.allProducts[i].name;
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  
  event.preventDefault();

  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}


function addSelectedItemToCart() {

  let itemEL = document.getElementById('items').value;
  let quantityField = document.getElementById('quantity');
  let quantity = parseInt(quantityField.value);

  console.log(itemEL);
  console.log(quantity);

  cart.addItem(itemEL, quantity);

  console.log(cart);

}


function updateCounter() { 
  let counterEl = document.getElementById('itemCount')
  counterEl.textContent= cart.items.length;
}
  
function updateCartPreview() {

  let itemEL = document.getElementById('items').value;
  let quantityField = document.getElementById('quantity');
  let quantity = parseInt(quantityField.value);

  let contentsEl = document.getElementById('cartContents');
  let contentsDiv = document.createElement('div');
  contentsEl.appendChild(contentsDiv);
  contentsDiv.textContent = [itemEL, quantity];
  
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
