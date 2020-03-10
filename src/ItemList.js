import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from './data.json';
import { v4 as uuid } from 'uuid';
import './ItemList.css';


import Item from './Item';

function ItemList() {
  const shoppingCart = useSelector(st => st.shoppingCart);
  const inventory = useSelector(st => st.inventory);
  const dispatch = useDispatch();

  console.log("inventory", inventory)
  console.log("shoppingcart", shoppingCart)
  const add = (item) => dispatch({ type: "ADD", payload: item })
  const remove = (item) => dispatch({ type: "REMOVE", payload: item })

  if (inventory.length === 0) {
    for (let item in data.products) {
      data.products[item].id = item;
      inventory.push(data.products[item])
    }
  }

  return (
    <div className="ItemList">
      <div data-testid="cart-num-items" className = "cart-num-items" >Items: {shoppingCart.length}</div>
      <ul>
        {
          inventory.map(item => (
            <li className = "item" key={uuid()}>
              <Item item={item} add={() => add(item)} remove={() => remove(item)} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ItemList;