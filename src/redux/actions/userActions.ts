import { Dispatch } from 'react';
import { GeneralAction, userInfo } from '../../types';
import ACTION_TYPES from '../actionTypes';

export const checkPassCode = (passCode: string) => (
    dispatch: Dispatch<GeneralAction>,
) => {
    console.log("checkPassCode", { passCode });

    dispatch({
        type: ACTION_TYPES.CHECK_PASS_CODE.REQUEST,
    })
};
export const handleUserRegisteration = (userInfo: userInfo) => (
    dispatch: Dispatch<GeneralAction>,
) => {
    console.log("handleUserRegisteration");
    
    dispatch({
        type: ACTION_TYPES.USER.REQUEST,
    })

};

