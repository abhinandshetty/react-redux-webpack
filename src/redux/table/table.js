/* types */
const GET_GRID_COLUMNS = "GET_GRID_COLUMNS";

/* inital state */
const initialState = {
    userGridColumns : [
        {
            columnHeader: "Name",
            key: "name"
        }, 
        {
            columnHeader: "Age",
            key: "age"
        }, 
        {
            columnHeader: "Department",
            key: "department"
        }, 
        {
            columnHeader: "Skills",
            key: "skills"
        }
    ]
}

/* actions */
export const getUserGridColumns = () => dispatch => {
    dispatch({
        type: GET_GRID_COLUMNS
    });
}

export default function tableReducer(state = initialState, action) {
    switch(action.type) {
        case GET_GRID_COLUMNS : 
            return {
                ...state
            }
        default: // need this for default case
        return state 
   
    }
}

