const initialState = {
  currentUser: {},
  myProjects: [],
  myProjectTasks: [],
  currentCollaborators: [],
  myToDoTasks: []
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ('GET_CURRENT_USER'): {
      return {...state, currentUser: action.payload}
    }
    default:
      return state
  }
}

export default reducer
