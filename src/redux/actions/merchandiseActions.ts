
import { Dispatch } from 'react';
import axios from 'axios';
import { END_POINTS } from '../../API_EndPoints';
import { GeneralAction, IUserMerchandise } from '../../types';
import ACTION_TYPES from '../actionTypes';

export const handleUserMerchandise = (userId: string, userMerchandise: IUserMerchandise) => (
    dispatch: Dispatch<GeneralAction>,
) => {

    dispatch({
        type: ACTION_TYPES.USER_MERCHANDISE.REQUEST,
    })
    return axios.post(END_POINTS.LC_LOOK_UP.replace('{userId}', userId),
        userMerchandise
    ).then(res => {
        console.log("handleUserMerchandise", { res });
        // dispatch({
        //     type: ACTION_TYPES.USER_MERCHANDISE.SUCCESS,
        //     payload: res
        // })
        // return res.data
    }).catch(err => {
        console.log("checkPassCode", { err: err.response.status });
        dispatch({
            type: ACTION_TYPES.CHECK_PASS_CODE.FALIURE,
            payload: err.response
        })
    })
};