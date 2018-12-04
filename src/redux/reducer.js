const initialState = {
  currentUser: {
    user: {},
    jwt: ""
  },
  allUsers: [],
  projects: [],
  newProj: {}
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ('GET_CURRENT_USER'): {
      return {...state, currentUser: action.payload}
    }
    case ('GET_ALL_USERS'): {
      return {...state, allUsers: action.payload}
    }
    case('GET_PROJECTS'): {
      return {...state, projects: action.payload}
    }
    case('SET_PROJECT'): {
      return {...state, newProj: action.payload}
    }
    default:
      return state
  }
}

export default reducer
