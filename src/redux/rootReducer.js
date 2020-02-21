import {combineReducers} from 'redux';
import userReducer from './user/user';
import tableReducer from './table/table';

export default combineReducers({
    users: userReducer,
    tables: tableReducer
})