import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from './data.json';
import { v4 as uuid } from 'uuid';


import Item from './Item';

function ItemList() {
  const shoppingCart = useSelector(st => st.shoppingCart);
  const dispatch = useDispatch();

  const add = (item) => dispatch({type: "ADD", payload: item})
  const remove = (item) => dispatch({type: "REMOVE", payload: item})

  console.log("DATA", data.products)
  let inventory = [];
  for(let item in data.products) {
    console.log("ITEM", item)
    inventory.push(data.products[item])
  }

  console.log("INVENTORY", inventory)
  return (
    <div className="ItemList">
      <ul>
      {
        inventory.map(item => (
          <li key={uuid()}>
            <Item item={item} add={() => add(item)} remove={() => remove(item)} />
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default ItemList;