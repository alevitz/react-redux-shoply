const INITIAL_STATE = { shoppingCart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case "ADD":
      return { ...state, items: [...state.items, { item: action.payload.item, id: action.payload.item }] };
    
      case "REMOVE":
      const id = action.payload;
      let newArray = state.items.filter((item) => {
        return item.id !== id
      });
      return { ...state, items: newArray }
    
    default:
      return state;
  }
}

export default rootReducer;