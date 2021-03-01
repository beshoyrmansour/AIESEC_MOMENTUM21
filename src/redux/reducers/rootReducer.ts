import { combineReducers } from 'redux';
import userReduser from './UserReduser';
import configsReducer from './configsReducer';
import MerchandiseReducer from './MerchandiseReducer';

export default combineReducers({
    user: userReduser,
    configs: configsReducer,
    merchandise: MerchandiseReducer,


});
