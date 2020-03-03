/* Types */
const GET_USER_LIST = 'GET_USER_LIST';
const LOGIN_USER = 'LOGIN_USER';
const ADD_USER = 'ADD_USER';
const DELETE_USER= 'DELETE_USER';
const BULK_ADD_USERS = 'BULK_ADD_USERS';

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

export const addBulkUsers = () => dispatch => {
    dispatch({
        type: BULK_ADD_USERS,
        payload: [
            {name:"Abhinand Shetty",age:"26",skills:"JavaScript",designation:"Software Developer",company:"Tagrem",id:Math.random()*1000000},
            {name:"Jack Warren",age:"27",skills:"Python, SAS",designation:"Data Analyst",company:"Facebook",id:Math.random()*1000000},
            {name:"Richard Lawrence",age:"31",skills:"RoR",designation:"Sr Software Developer",company:"Rakuten",id:Math.random()*1000000},
            {name:"Penny Pattinson",age:"27",skills:"Adobe Illustrator",designation:"UX Designer",company:"Netflix",id:Math.random()*1000000},
            {name:"Cheryl Koman",age:"31",skills:"Selenium",designation:"Sr Automation Tester",company:"Amazon",id:Math.random()*1000000}        ]
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
        case BULK_ADD_USERS:
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

