
const INITIAL_STATE = { shoppingCart: [], inventory: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "ADD":
      return { ...state, shoppingCart: [...state.shoppingCart, { item: action.payload }] };

    case "REMOVE":
      const id = action.payload.id;
      const cart = state.shoppingCart;
      let index = -1;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].item.id === id) {
          index = i;
          break;
        }
      };
      let cartCopy = [...cart];
      if (index > -1) cartCopy.splice(index, 1);
      return { ...state, shoppingCart: cartCopy }

    default:
      return state;
  }
}

export default rootReducer;