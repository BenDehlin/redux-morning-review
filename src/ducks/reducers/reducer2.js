const initialState = {
  cart: [
    {id: 1, name: 'slinky', price: 15},
    {id: 2, name: 'star wars action figure', price: 35}
  ]
}

export default function cartReducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    default:
      return state
  }
}