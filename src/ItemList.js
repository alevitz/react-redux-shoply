import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import './ItemList.css';
import Item from './Item';
import { Link } from "react-router-dom";

function ItemList() {
  const shoppingCart = useSelector(st => st.shoppingCart);
  const inventory = useSelector(st => st.inventory);
  const dispatch = useDispatch();

  const add = (item) => dispatch({ type: "ADD", payload: item })
  const remove = (item) => dispatch({ type: "REMOVE", payload: item })

  return (
    <div className="ItemList">
      <Link to={`/cart`}>
      <div data-testid="cart-num-items" className="cart-num-items" >
        Items: {shoppingCart.length}
      </div>
      </Link>
      <ul>
        {
          inventory.map(item => (
            <li className="item" key={uuid()}>
              <Item item={item} add={() => add(item)} remove={() => remove(item)} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ItemList;