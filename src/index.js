// 'use strict';

// import $ from 'jquery';
// import './../styles/index.css';
// /* global shoppingList, store, api */

// $(document).ready(function() {
//   shoppingList.bindEventListeners();

//   // On initial load, fetch Shopping Items and render
//   api.getItems()
//     .then((items) => {
//       items.forEach((item) => store.addItem(item));
//       shoppingList.render();
//     })
//     .catch(err => console.log(err.message));
// }); 

import $ from 'jquery';

function main() {
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

$(main);