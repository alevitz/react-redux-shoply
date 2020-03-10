// import React from "react";
import reducers from './rootReducer';
  
//add item to shopping cart
  test('reducers', () => {
    let state;
    state = reducers({shoppingCart:[]}, {type:'ADD',payload:{name:'tv',price:219.99,description:'A beautiful, big-screen TV. Because hey, Netflix isn\'t going to watch itself.',image_url:'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue',id:'47314fa1-ae56-4eae-80be-af6691145951'}});
    
    expect(state).toEqual({shoppingCart:[{item:{name:'tv',price:219.99,description:'A beautiful, big-screen TV. Because hey, Netflix isn\'t going to watch itself.',image_url:'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue',id:'47314fa1-ae56-4eae-80be-af6691145951'}}]});
  });

//remove item from shopping cart
  test('reducers', () => {
    let state;
    state = reducers({shoppingCart:[{item:{name:'toaster oven',price:20.49,description:'Tasty bread not included.',image_url:'https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg',id:'b04b779c-1cfb-48a7-8424-25a8c7e608ae'}}]}, {type:'REMOVE',payload:{name:'toaster oven',price:20.49,description:'Tasty bread not included.',image_url:'https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg',id:'b04b779c-1cfb-48a7-8424-25a8c7e608ae'}});
    
    expect(state).toEqual({shoppingCart:[]});
  });

//remove item from empty shopping cart
  test('reducers', () => {
    let state;
    state = reducers({shoppingCart:[]}, {type:'REMOVE',payload:{name:'toaster oven',price:20.49,description:'Tasty bread not included.',image_url:'https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg',id:'b04b779c-1cfb-48a7-8424-25a8c7e608ae'}});
    
    expect(state).toEqual({shoppingCart:[]});
  });


