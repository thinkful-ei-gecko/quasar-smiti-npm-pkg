import $ from 'jquery';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
}); 