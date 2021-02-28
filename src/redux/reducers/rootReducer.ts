import { combineReducers } from 'redux';
import userReduser from './UserReduser';
import MerchandiseReducer from './MerchandiseReducer';

export default combineReducers({
    user: userReduser,
    merchandise: MerchandiseReducer,

});
