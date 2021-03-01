import { Dispatch } from 'react';
import axios from 'axios';
import { END_POINTS } from '../../API_EndPoints';
import { GeneralAction, IUserInfo } from '../../types';
import ACTION_TYPES from '../actionTypes';
import { BASE_URL } from '../../API_EndPoints';

export const checkPassCode = (passCode: string) => (
    dispatch: Dispatch<GeneralAction>,
) => {

    dispatch({
        type: ACTION_TYPES.CHECK_PASS_CODE.REQUEST,
    })
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
    // OPTIONS http://myaccount.blob.core.windows.net/mycontainer/myblockblob  HTTP/1.1  
    // Accept: */*  
    // Origin: www.contoso.com
    // axios.defaults.headers['Access-Control-Request-Method'] = ' GET';
    axios.defaults.headers['Origin'] = 'http://momentum21.surge.sh';
    axios.defaults.headers['Access-Control-Request-Headers'] = ' content-type, accept';
    axios.defaults.headers['Accept-Encoding'] = ' gzip, deflate  ';
    axios.defaults.headers['User-Agent'] = ' Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)';
    axios.defaults.headers['Content-Length'] = ' 0';

    return axios.get(END_POINTS.LC_LOOK_UP.replace('{code}', passCode)).then(res => {
        dispatch({
            type: ACTION_TYPES.CHECK_PASS_CODE.SUCCESS,
            payload: res.data
        })
        // return res.data

    }).catch(err => {

        console.log("checkPassCode", { err });
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

