import React from 'react';
import { freqCounter } from './helper';
import { useSelector, useDispatch } from 'react-redux';

function Cart({add, remove}) {
const shoppingCart = useSelector(st => st.shoppingCart);

let names = shoppingCart.map(item => item.item.name);

let cart = freqCounter(names);  
console.log(cart);
  return (
    <div>
      <ul>
  { Object.keys(cart).map((key) => <li>{key} X{cart[key]}</li>) }
        </ul>
    </div>
  )
}

export default Cart;

