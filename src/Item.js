import React from 'react';

function Item({item, add, remove}) {

  return (
    <div>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>{item.description}</div>
      <div><img src={item.image_url} alt="item"/></div>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Item;

