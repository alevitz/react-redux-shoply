import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
function ItemDetails() {
  const { name } = useParams();

  const dispatch = useDispatch();
  const shoppingCart = useSelector(st => st.shoppingCart);
  const inventory = useSelector(st => st.inventory);
  let item = inventory.find(item => item.name === name);

  const add = (item) => dispatch({ type: "ADD", payload: item })
  const remove = (item) => dispatch({ type: "REMOVE", payload: item })

  return (
    <div>
      <div data-testid="cart-num-items" className="cart-num-items" >
        Items: {shoppingCart.length}
      </div>
      <div className = "item-name">{item.name.toUpperCase()}</div>
      <div>${item.price}</div>
      <div className = "item-desc">{item.description}</div>
      <div className = "item-img"><img src={item.image_url} alt="item" height="200"/></div>
      <button onClick={() => add(item)} data-testid={`add-${item.name}`}>Add</button>
      <button onClick={() => remove(item)} data-testid={`remove-${item.name}`}>Remove</button>
    </div>
  )

}

export default ItemDetails;