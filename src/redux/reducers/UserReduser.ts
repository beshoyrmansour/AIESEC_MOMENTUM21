import ACTION_TYPES from '../actionTypes';
import { GeneralAction, UserReducer } from '../../types';

const initialState: UserReducer = {
    isCheckingPassCode: false,
    userName: '',
    localCommittee: {},
    id: '',
    userInfo: {
        fullName: '',
        gender: '',
        phone: '',
        email: '',
        function: '',
        role: '',
        passportImage: '',
        nationalIdFrontImage: '',
        nationalIdBackImage: '',
        personalImage: '',
    },
    checkingPassCodeErrorMSG: ''

};

export default (state = initialState, action: GeneralAction) => {
    let newState = state;

    // ---------- CHECK_PASS_CODE ----------

    switch (action.type) {
        case ACTION_TYPES.CHECK_PASS_CODE.REQUEST:
            newState = {
                ...state,
                isCheckingPassCode: true,
                localCommittee: {},
                checkingPassCodeErrorMSG: ''
            };
            break;
        case ACTION_TYPES.CHECK_PASS_CODE.SUCCESS:
            newState = {
                ...state,
                isCheckingPassCode: false,
                localCommittee: { ...action.payload },
                checkingPassCodeErrorMSG: ''
            };
            break;
        case ACTION_TYPES.CHECK_PASS_CODE.FALIURE:
            newState = {
                ...state,
                isCheckingPassCode: false,
                localCommittee: {},
                checkingPassCodeErrorMSG: 'Invalid LC code, please try again!'
            };
            break;
        case ACTION_TYPES.USER.USER_INFO.SET:
            newState = {
                ...state,
                userInfo: { ...action.payload }
            };
            break;
        default:
            break;
    }
    return newState;
};