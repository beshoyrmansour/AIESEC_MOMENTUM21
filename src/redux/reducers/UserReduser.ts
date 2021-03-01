import ACTION_TYPES from '../actionTypes';
import { GeneralAction, UserReducer } from '../../types';

const initialState: UserReducer = {
    isCheckingPassCode: false,
    userName: '',
    localCommittee: {},
    userInfo: {
        fullName: '',
        gender: '',
        phone: '',
        email: '',
        function: '',
        role: '',
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
                // localCommittee: {},
                localCommittee: {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "registrationNumber": 0,
                    "creationDateTime": "2021-03-01T04:30:23.033Z",
                    "localCommitteeId": 0,
                    "name": "string",
                    "code": "string"
                },
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