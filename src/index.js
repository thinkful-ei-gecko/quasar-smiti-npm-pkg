import $ from 'jquery';

import './index.css';

import api from './api';
import store from './store';
import shoppingList from './shopping-list';




$(document).ready(function() {
  shoppingList.bindEventListeners();
  
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
}); 