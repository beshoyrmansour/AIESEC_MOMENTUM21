
import ACTION_TYPES from '../actionTypes';
import { GeneralAction, ConfigsReducer } from '../../types';

const initialState: ConfigsReducer = {
    isLoadingAIESIC_Functions: false,
    AIESIC_Functions: [],
    isLoadingAIESIC_ROLES: false,
    AIESIC_ROLES: []
};


export default (state = initialState, action: GeneralAction) => {
    let newState = state;


    switch (action.type) {
        // ---------- AIESEC_FUNCTIONS ----------
        case ACTION_TYPES.CONFIGS.AIESEC_FUNCTIONS.REQUEST:
            newState = {
                ...state,
                isLoadingAIESIC_Functions: true,
                AIESIC_Functions: [],
            };
            break;
        case ACTION_TYPES.CONFIGS.AIESEC_FUNCTIONS.SUCCESS:
            newState = {
                ...state,
                isLoadingAIESIC_Functions: false,
                AIESIC_Functions: [...action.payload],
            };
            break;
        case ACTION_TYPES.CONFIGS.AIESEC_FUNCTIONS.FALIURE:
            newState = {
                ...state,
                isLoadingAIESIC_Functions: false,
                AIESIC_Functions: [],
            };
            break;

        // ---------- AIESEC_ROLES ----------

        case ACTION_TYPES.CONFIGS.AIESEC_ROLES.REQUEST:
            newState = {
                ...state,
                isLoadingAIESIC_ROLES: true,
                AIESIC_ROLES: [],
            };
            break;
        case ACTION_TYPES.CONFIGS.AIESEC_ROLES.SUCCESS:
            newState = {
                ...state,
                isLoadingAIESIC_ROLES: false,
                AIESIC_ROLES: [...action.payload],
            };
            break;
        case ACTION_TYPES.CONFIGS.AIESEC_ROLES.FALIURE:
            newState = {
                ...state,
                isLoadingAIESIC_ROLES: false,
                AIESIC_ROLES: [],
            };
            break;


        default:
            break;
    }
    return newState;
};