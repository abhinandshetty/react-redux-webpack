/* Types */
const GET_USER_LIST = 'GET_USER_LIST';
const LOGIN_USER = 'LOGIN_USER';
const ADD_USER = 'ADD_USER';
const DELETE_USER= 'DELETE_USER';


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

export const loginUser = user => dispatch => {
  dispatch({
      type: LOGIN_USER,
      payload: user
  });
};

export const addUser = (user, callback = () => {}) => dispatch => {
    dispatch({
        type: ADD_USER,
        payload: user
    });
    callback();
};

export const deleteUser = id => dispatch => {
    dispatch({
        type: DELETE_USER,
        payload: id
    });
};

/* Reducer */
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LIST:
            return {
                ...state
            };
        case LOGIN_USER:
            return {
                ...state,
                loggedInUser: action.payload
            };
        case ADD_USER:
            return {
                ...state,
                userList: state.userList.concat(action.payload)
            };
        case DELETE_USER:
            return {
                ...state,
                userList: state.userList.filter(user => user.id!==action.payload)
            };
        default:
            return state;
    }
}

