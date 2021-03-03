import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CheckIcon from '@material-ui/icons/Check';

import human from '../assets/human.png';
import UserIdPhotos from './Steps/UserIdPhotos';
import MerchandiseSelector from './Steps/MerchandiseSelector';
import UserInfoSteps from './Steps/UserInfoSteps';
import NotFound from './NotFound';
import Summary from './Summary';
import { handleUserRegisteration } from '../redux/actions/userActions';
import { Container, Fab, Grid, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/store';
import { ILocalCommittee, IUserInfo, IUserMerchandise } from '../types';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2)
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },

    appBar: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        paddingLeft: theme.spacing(2),
    },
    appBarImage: {
        width: 50,
        margin: theme.spacing(0),
        padding: theme.spacing(0),

    },
    contentWrapper: {
        width: '100%',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2),

    },
    navButton: {
        marginBottom: theme.spacing(4),
    }
}));

function getSteps() {
    return ['Your Info', 'Your ID photo', 'Merchandise'];
}

const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
        case 0:
            return <UserInfoSteps />;
        case 1:
            return <UserIdPhotos />;
        case 2:
            return <MerchandiseSelector />;
        default:
            return <NotFound />;
    }
}

export default function Registeration() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const userInfo = useSelector(
        (state: AppState) => state.user.userInfo,
    ) as IUserInfo;
    const userId = useSelector((state: AppState) => state.user.id);
    const localCommittee = useSelector((state: AppState) => state.user.localCommittee) as ILocalCommittee;
    const userMerchandise = useSelector((state: AppState) => state.merchandise.userMerchandise) as IUserMerchandise[];

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    useEffect(() => {
        if ('localCommitteeId' in localCommittee && localCommittee.localCommitteeId !== null) { } else { history.push('/') }
    }, [])

    const handleNext = () => {
        if (activeStep >= steps.length - 1)
            dispatch(handleUserRegisteration(userInfo, localCommittee, userMerchandise));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.appBar}>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
                    <img src={human} className={classes.appBarImage} />
                    {/* </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        AIESEC <br />
                        MOMENTUM 21</Typography>
                </Toolbar>
            </AppBar>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) =>
                (
                    <Step key={label}>
                        <StepLabel>{''}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <Container maxWidth="md">
                        <><Summary /></>
                    </Container>
                ) : (
                        <Grid container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={0}
                        >
                            <Container maxWidth="md">
                                <Paper className={classes.contentWrapper}>
                                    {getStepContent(activeStep)}
                                </Paper>
                            </Container>

                            <Grid container
                                direction="row"
                                justify="space-around"
                                alignItems="center"
                                className={classes.navButton}
                            >
                                <Fab color="default" onClick={handleBack}>
                                    <ChevronLeftIcon />
                                </Fab>
                                <Fab color={activeStep <= steps.length - 2 ? "primary" : "secondary"} variant={activeStep <= steps.length - 2 ? "round" : "extended"} onClick={handleNext}>
                                    {activeStep <= steps.length - 2 ?
                                        <ChevronRightIcon /> :
                                        <> <CheckIcon /> Finish</>
                                    }
                                </Fab>
                            </Grid>
                        </Grid>
                    )}
            </div>
        </div >
    );
}