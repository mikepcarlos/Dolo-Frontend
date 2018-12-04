/* --------------------- ACTION CREATORS ------------------------ */

export const getCurrentUser = (currentUser) => ({ type: "GET_CURRENT_USER", payload: currentUser })

export const getAllUsers = (users) => ({ type: "GET_ALL_USERS", payload: users.data })

export const getProjects = (projects) => ({ type: "GET_PROJECTS", payload: projects.data })

export const setProject = (project) => ({ type: "SET_PROJECT", payload: project.data })


// export const getCurrentUser = (currentUser) => {
//   return (disptach) => {
//     type: "GET_CURRENT_USER",
//     payload: currentUser
//   }
// }

/* --------------------- THUNK CREATORS ------------------------ */
