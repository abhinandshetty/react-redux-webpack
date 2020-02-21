/* Types */
const GET_USER_LIST = 'GET_USER_LIST';
const LOGIN_USER = 'LOGIN_USER';
const ADD_USER = 'ADD_USER';


/* Initial State */
const initialState = {
    userList: [],
    loggedInUser: []
};


/* Actions */
export const getUsers = () => dispatch => {
    dispatch({
        type: GET_USER_LIST
    });
};

export const loginUser = (user) => dispatch => {
  dispatch({
      type: LOGIN_USER,
      payload: user
  });
};

export const addUser = (user) => dispatch => {
    dispatch({
        type: ADD_USER,
        payload: user
    });
};


/* Reducer */
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LIST :
            return {
                ...state
            };
        case LOGIN_USER :
            return {
                ...state,
                loggedInUser: action.payload
            };
        case ADD_USER:
            return {
                ...state,
                userList: state.userList.concat(action.payload)
            };
        default:
            return state;
    }
}

