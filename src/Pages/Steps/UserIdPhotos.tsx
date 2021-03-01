import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import ImageUploader from "react-images-upload";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { AppState } from '../../redux/store';
import { IDOptions, IUserInfo } from '../../types';
import ACTION_TYPES from '../../redux/actionTypes';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    options: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    imageUploader: {
        width: '100%'
    }
    ,
    textCenter: {
        textAlign: 'center'
    }
}));

const UserIdPhotos = (props: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const userInfo = useSelector((state: AppState) => state.user.userInfo) as IUserInfo;

    const maxFileSize = 5242880;

    const [passportImage, setPassportImage] = useState('');
    const [nationalIdFrontImage, setNationalIdFrontImage] = useState('');
    const [nationalIdBackImage, setNationalIdBackImage] = useState('');
    const [personalImage, setPersonalImage] = useState('');
    const [preferredMethod, setPreferredMethod] = useState('');

    const toBase64 = (file: any) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const onDropPersonalImage = (files: any) => {
        toBase64(files[0]).then((v: any) => {
            dispatch({
                type: ACTION_TYPES.USER.USER_INFO.SET,
                payload: {
                    ...userInfo,
                    passportImage: v
                }
            })
        })
    }
    const onDropNationalIdFrontImage = (files: any) => {
        toBase64(files[0]).then((v: any) => {
            dispatch({
                type: ACTION_TYPES.USER.USER_INFO.SET,
                payload: {
                    ...userInfo,
                    nationalIdFrontImage: v
                }
            })
        })
    }
    const onDropNationalIdBackImage = (files: any) => {
        toBase64(files[0]).then((v: any) => {
            dispatch({
                type: ACTION_TYPES.USER.USER_INFO.SET,
                payload: {
                    ...userInfo,
                    nationalIdBackImage: v
                }
            })
        })
    }
    const onDropPassportImage = (files: any) => {
        toBase64(files[0]).then((v: any) => {
            dispatch({
                type: ACTION_TYPES.USER.USER_INFO.SET,
                payload: {
                    ...userInfo,
                    personalImage: v
                }
            })
        })
    }

    const handlePreferredMethodChange = (e: any) => {
        const { value } = e.target;
        setPreferredMethod(value);
    }

    return (
        <div>
            {/* <Avatar alt="Remy Sharp" src="">{userInfo?.fullName.charAt(0)}</Avatar> */}
            {/* <input type="file" onChange={personalImageFileChangedHandler} />
            <Button onClick={handleUploadPersonalImage}>Upload your Photo</Button> */}

            <FormLabel component="legend">Personal Photos</FormLabel>
            <ImageUploader
                withIcon={true}
                buttonText="Upload your Photo"
                onChange={onDropPersonalImage}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={maxFileSize}
                singleImage
                withPreview
            />

            <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">ID Photos</FormLabel>
                <RadioGroup aria-label="Id_photos" name="gender1" value={preferredMethod} onChange={handlePreferredMethodChange} className={classes.options}>
                    <FormControlLabel value={IDOptions.nationalId} control={<Radio />} label="nationalId" />
                    <FormControlLabel value={IDOptions.passport} control={<Radio />} label="passport" />
                </RadioGroup>
            </FormControl>
            {
                preferredMethod === IDOptions.nationalId &&
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" alignItems='center' spacing={2}>
                            <Grid item md={6} xs={12} justify="center" alignItems='center'>
                                <Typography variant="subtitle1" className={classes.textCenter}>ID Front Side</Typography>

                                <ImageUploader
                                    withIcon={true}
                                    buttonText="Upload national ID Front Side Image"
                                    onChange={onDropNationalIdFrontImage}
                                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                                    maxFileSize={maxFileSize}
                                    singleImage
                                    withPreview
                                    className={classes.imageUploader}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} justify="center" alignItems='center'>
                                <Typography variant="subtitle1" className={classes.textCenter}>ID Back Side</Typography>

                                <ImageUploader
                                    withIcon={true}
                                    buttonText="Upload national ID Back Side Image"
                                    onChange={onDropNationalIdBackImage}
                                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                                    maxFileSize={maxFileSize}
                                    singleImage
                                    withPreview
                                    className={classes.imageUploader}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }

            {
                preferredMethod === IDOptions.passport && <ImageUploader
                    withIcon={true}
                    buttonText="Upload national ID Back Face Image"
                    onChange={onDropPassportImage}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={maxFileSize}
                    singleImage
                    withPreview
                />

            }

        </div>
    )
}

export default UserIdPhotos
