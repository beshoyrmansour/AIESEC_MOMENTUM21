import { Dispatch } from 'react';
import axios from 'axios';
import { END_POINTS } from '../../API_EndPoints';
import { GeneralAction } from '../../types';
import ACTION_TYPES from '../actionTypes';

export const getFunctions = () => (
    dispatch: Dispatch<GeneralAction>,
) => {
    dispatch({
        type: ACTION_TYPES.CONFIGS.AIESEC_FUNCTIONS.REQUEST,
    })
    return axios.get(END_POINTS.ENUMS.FUNCTIONS).then(res => {
        dispatch({
            type: ACTION_TYPES.CONFIGS.AIESEC_FUNCTIONS.SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: ACTION_TYPES.CONFIGS.AIESEC_FUNCTIONS.FALIURE,
            payload: err.response
        })
    })
};
export const getRoles = () => (
    dispatch: Dispatch<GeneralAction>,
) => {
    dispatch({
        type: ACTION_TYPES.CONFIGS.AIESEC_ROLES.REQUEST,
    })
    return axios.get(END_POINTS.ENUMS.ROLES).then(res => {
        dispatch({
            type: ACTION_TYPES.CONFIGS.AIESEC_ROLES.SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: ACTION_TYPES.CONFIGS.AIESEC_ROLES.FALIURE,
            payload: err.response
        })
    })
};