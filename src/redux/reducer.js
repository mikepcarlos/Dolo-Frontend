const initialState = {
  currentUser: {
    user: {},
    jwt: ""
  },
  allUsers: [],
  projects: [],
  newProj: {},
  currentTasks: []
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
    case('CURRENT_TASKS'): {
      return {...state, currentTasks: [...state.currentTasks, action.payload]}
    }
    default:
      return state
  }
}

export default reducer
