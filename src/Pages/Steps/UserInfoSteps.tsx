import { makeStyles, MenuItem, TextField, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFunctions, getRoles } from '../../redux/actions/configActions';
import { AppState } from '../../redux/store';
import { IListItem, IUserInfo } from '../../types';
import ACTION_TYPES from '../../redux/actionTypes';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(1),
            maxWidth: '500px',
        },
    },
}));

interface Props {

}

const UserInfoSteps = (props: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const userInfo = useSelector((state: AppState) => state.user.userInfo) as IUserInfo;
    const isLoadingAIESIC_Functions = useSelector((state: AppState) => state.configs.isLoadingAIESIC_Functions);
    const AIESIC_Functions = useSelector((state: AppState) => state.configs.AIESIC_Functions) as [];
    const isLoadingAIESIC_ROLES = useSelector((state: AppState) => state.configs.isLoadingAIESIC_ROLES);
    const AIESIC_ROLES = useSelector((state: AppState) => state.configs.AIESIC_ROLES) as [];

    useEffect(() => {
        dispatch(getFunctions())
        dispatch(getRoles())
        return () => {

        }
    }, [])

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        console.log({ name, value });
        dispatch({
            type: ACTION_TYPES.USER.USER_INFO.SET,
            payload: {
                ...userInfo,
                [name]: value
            }
        })

    }

    // useEffect(() => {
    //     for (var key in userInfo) {
    //         if (userInfo[key] != "")
    //             dispatch({
    //                 type: ACTION_TYPES.CONFIGS.CAN_GO_TO_NEXT_STEP,
    //                 payload: false
    //             });
    //     }
    //     dispatch({
    //         type: ACTION_TYPES.CONFIGS.CAN_GO_TO_NEXT_STEP,
    //         payload: true
    //     });

    //     return () => {


    //     }
    // }, [userInfo])

    return (
        <form className={classes.root}>
            <Typography variant="h4" color="textSecondary" component="h4" gutterBottom >Welcome, Please Fill the following form</Typography>

            <div>
                <TextField
                    fullWidth
                    required
                    id="userInfo_fullName"
                    label="Full Name"
                    name='fullName'
                    value={userInfo.fullName}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    required
                    select
                    id="userInfo_gender"
                    label="Gender"
                    name='gender'
                    value={userInfo.gender}
                    onChange={handleInputChange}
                >
                    <MenuItem id='f' key='f' value='f'>Female</MenuItem>
                    <MenuItem id='m' key='m' value='m'>Male</MenuItem>
                </TextField>
                <TextField
                    fullWidth
                    required
                    id="userInfo_phone"
                    label="Phone number"
                    name='phone'
                    value={userInfo.phone}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    required
                    id="userInfo_email"
                    label="Email address"
                    name='email'
                    value={userInfo.email}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    required
                    id="userInfo_facebookLink"
                    label="facebook Profile Link"
                    name='facebookLink'
                    value={userInfo.facebookLink}
                    onChange={handleInputChange}
                />

                <TextField
                    fullWidth
                    required
                    select
                    id="userInfo_function"
                    label="Function"
                    name='function'
                    value={userInfo.function}
                    onChange={handleInputChange}
                    disabled={isLoadingAIESIC_Functions}
                >
                    {!isLoadingAIESIC_Functions && AIESIC_Functions.length > 0 && AIESIC_Functions.map((option: IListItem) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    fullWidth
                    required
                    select
                    id="userInfo_role"
                    label="Role"
                    name='role'
                    value={userInfo.role}
                    onChange={handleInputChange}
                    disabled={isLoadingAIESIC_ROLES}
                >
                    {!isLoadingAIESIC_ROLES && AIESIC_ROLES.length > 0 && AIESIC_ROLES.map((option: IListItem) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </form>
    )
}

export default UserInfoSteps
