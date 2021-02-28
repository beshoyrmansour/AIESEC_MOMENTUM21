import { Dispatch } from 'react';
import { GeneralAction } from '../../types';
import ACTION_TYPES from '../actionTypes';

export const checkPassCode = (passCode: string) => (
    dispatch: Dispatch<GeneralAction>,
) => {
    console.log("checkPassCode", { passCode });

    dispatch({
        type: ACTION_TYPES.CHECK_PASS_CODE.REQUEST,
    })
};