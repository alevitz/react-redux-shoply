// import React from "react";
import reducers from './rootReducer';
  
//add item to shopping cart
  test('reducers - add item to shopping cart', () => {

    let state;
    state = reducers({shoppingCart:[]}, 
      {type:'ADD',
      payload:{name:'name',price:1,description:'desc',image_url:'img',id:'id'}});
   
    // Might want to test that reducers were pure
    expect(state).toEqual({shoppingCart:[{item:{ name:'name',price:1,description:'desc',image_url:'img',id:'id' }}]});
  });

//remove item from shopping cart
  test('reducers', () => {
    let state;
    state = reducers({shoppingCart:[{item:{name:'name',price:1,description:'desc',image_url:'img',id:'id'}}]}, {type:'REMOVE',payload:{name:'name',price:1,description:'desc',image_url:'img',id:'id'}});
    
    expect(state).toEqual({shoppingCart:[]});
  });

//remove item from empty shopping cart
  test('reducers', () => {
    let state;
    state = reducers({shoppingCart:[]}, {type:'REMOVE',payload:{name:'name',price:1,description:'desc',image_url:'img',id:'id'}});
    
    expect(state).toEqual({shoppingCart:[]});
  });


