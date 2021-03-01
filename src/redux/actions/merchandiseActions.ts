
import { Dispatch } from 'react';
import axios from 'axios';
import { END_POINTS } from '../../API_EndPoints';
import { GeneralAction, IUserMerchandise } from '../../types';
import ACTION_TYPES from '../actionTypes';

export const getAllMerchandise = () => (
    dispatch: Dispatch<GeneralAction>,
) => {
    dispatch({
        type: ACTION_TYPES.MERCHANDISE_LIST.REQUEST,
    })
    return axios.get(END_POINTS.MERCHANDISE.MERCHANDISE_LIST).then(res => {
        console.log("handleUserMerchandise", { res });
        dispatch({
            type: ACTION_TYPES.MERCHANDISE_LIST.SUCCESS,
            payload: res.data
        })
        return res.data
    }).catch(err => {
        console.log("checkPassCode", { err: err });
        dispatch({
            type: ACTION_TYPES.MERCHANDISE_LIST.FALIURE,
            payload: err.response
        })
    })
}
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
        console.log("checkPassCode", { err: err });
        dispatch({
            type: ACTION_TYPES.USER_MERCHANDISE.FALIURE,
            payload: err.response
        })
    })
};