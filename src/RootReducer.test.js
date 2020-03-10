// import React from "react";
import reducers from './rootReducer';
  
  test('reducers - add item to shopping cart', () => {

    let state;
    state = reducers({shoppingCart:[]}, 
      {type:'ADD',
      payload:{name:'name',price:1,description:'desc',image_url:'img',id:'id'}});
   
    // Might want to test that reducers were pure
    expect(state).toEqual({shoppingCart:[{item:{ name:'name',price:1,description:'desc',image_url:'img',id:'id' }}]});
  });

  test('reducers - remove item from shopping cart', () => {
    let state;
    state = reducers({shoppingCart:[{item:{name:'name',price:1,description:'desc',image_url:'img',id:'id'}}]}, {type:'REMOVE',payload:{name:'name',price:1,description:'desc',image_url:'img',id:'id'}});
    
    expect(state).toEqual({shoppingCart:[]});
  });

  test('reducers - remove item from empty shopping cart', () => {
    let state;
    state = reducers({shoppingCart:[]}, {type:'REMOVE',payload:{name:'name',price:1,description:'desc',image_url:'img',id:'id'}});
    
    expect(state).toEqual({shoppingCart:[]});
  });


