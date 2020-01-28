const initialState = {
  list: ['Hello', {stuff: 'this is stuff'}],
  user: {
    username: 'Ben',
    id: 1,
    password: 'verysecure'
  }
}

const PRACTICE_FUNCTION = 'PRACTICE_FUNCTION'

export const practiceFunction = (res) => {
  return  {
    type: PRACTICE_FUNCTION,
    payload: res
  }
}

export default function reducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    case PRACTICE_FUNCTION:
      return {...state, list: [...state.list, payload]}
    default:
      return state
  }
}