const initialState = {
  currentUser: {
    user: {},
    jwt: ""
  }
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ('GET_CURRENT_USER'): {
      console.log("in disptach");
      return {...state, currentUser: action.payload}
    }
    default:
      return state
  }
}

export default reducer
