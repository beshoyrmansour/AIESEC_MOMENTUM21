import { combineReducers } from 'redux';
import UserReduser from './UserReduser';

import ConfigsReducer from './ConfigsReducer';
import MerchandiseReducer from './MerchandiseReducer';

export default combineReducers({
    user: UserReduser,
    configs: ConfigsReducer,
    merchandise: MerchandiseReducer,


});
