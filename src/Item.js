import React from 'react';
import './Item.css';
import { Link } from "react-router-dom";

function Item({item, add, remove}) {

  return (
    <div>
      <Link to={`/products/${item.name}`}><div className = "item-name">{item.name.toUpperCase()}</div></Link>
      <div>${item.price}</div>
      <div className = "item-desc">{item.description}</div>
      <div className = "item-img"><img src={item.image_url} alt="item" height="200"/></div>
      <button onClick={add} data-testid={`add-${item.name}`}>Add</button>
      <button onClick={remove} data-testid={`remove-${item.name}`}>Remove</button>
    </div>
  )
}

export default Item;

