import ACTION_TYPES from '../actionTypes';
import { GeneralAction, UserReducer } from '../../types';

const initialState: UserReducer = {
    isCheckingPassCode: false,
    userName: '',
    localCommittee: {}
};

export default (state = initialState, action: GeneralAction) => {
    let newState = state;

    // ---------- GET_AVAILABLE_SERVICES_LIST ----------

    switch (action.type) {
        case ACTION_TYPES.MERCHANDISE_LIST.REQUEST:
            newState = {
                ...state,
                isCheckingPassCode: true,
                userName: '',
                localCommittee: {}
            };
            break;
        case ACTION_TYPES.CHECK_PASS_CODE.REQUEST:
            newState = {
                ...state,
                isCheckingPassCode: true,
                userName: '',
                localCommittee: {}
            };
            break;
        default:
            break;
    }
    return newState;
};