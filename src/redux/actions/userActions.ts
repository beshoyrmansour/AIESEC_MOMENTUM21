import { Dispatch } from 'react';
import axios from 'axios';
import { END_POINTS } from '../../API_EndPoints';
import { GeneralAction, IUserInfo } from '../../types';
import ACTION_TYPES from '../actionTypes';

export const checkPassCode = (passCode: string) => (
    dispatch: Dispatch<GeneralAction>,
) => {

    dispatch({
        type: ACTION_TYPES.CHECK_PASS_CODE.REQUEST,
    })
    return axios.get(END_POINTS.LC_LOOK_UP.replace('{code}', passCode)).then(res => {

        console.log("checkPassCode", { res });
        dispatch({
            type: ACTION_TYPES.CHECK_PASS_CODE.SUCCESS,
            payload: res
        })
        // return res.data

    }).catch(err => {

        console.log("checkPassCode", { err: err.response.status });
        dispatch({
            type: ACTION_TYPES.CHECK_PASS_CODE.FALIURE,
            payload: err.response
        })
    })
};
export const handleUserRegisteration = (userInfo: IUserInfo) => (
    dispatch: Dispatch<GeneralAction>,
) => {
    console.log("handleUserRegisteration");

    dispatch({
        type: ACTION_TYPES.USER.REQUEST,
    })

};

