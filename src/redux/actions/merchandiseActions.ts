
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
        dispatch({
            type: ACTION_TYPES.MERCHANDISE_LIST.SUCCESS,
            payload: res.data
        })
        return res.data
    }).catch(err => {
        dispatch({
            type: ACTION_TYPES.MERCHANDISE_LIST.FALIURE,
            payload: err.response
        })
    })
}
