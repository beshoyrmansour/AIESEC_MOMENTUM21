import React, { useEffect, useState } from 'react';
import aiesec_logo from '../assets/aiesec_logo.svg';
import welcome from '../assets/welcome.svg';
import logo from '../assets/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Accordion from '@material-ui/core/Accordion';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/store';
import { checkPassCode } from '../redux/actions/userActions';

const useStyles = makeStyles((theme) => ({
    root: {
        '&': {
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        '& > *': {
            margin: theme.spacing(0),
            textAlign: 'center',
        },
    },
    extendedIcon: {
        // marginRight: theme.spacing(1),
    },
    fab: {
        // position: 'absolute',
        // bottom: theme.spacing(4),
        marginTop: theme.spacing(4)
        // right: 'calc(50% - 60px)',
    },
    textField: {
        marginTop: theme.spacing(4),
        '& > input': {
            textAlign: 'center',
        }
        // width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fabProgress: {

        position: 'absolute',
        // top: 6,
        bottom: -1,

        // left: 6,
        zIndex: 1,
    },
    acknowledge: {
        marginTop: theme.spacing(3),
    },
    acknowledge2: {
        marginTop: theme.spacing(4),
        paddingLeft: theme.spacing(2),
    }
}));
interface Props {

}

const Login = (props: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [canCheckPassCode, setCanCheckPassCode] = useState(true);
    const [readCancelationTrems, setReadCancelationTrems] = useState(false);
    const [readRoundTrems, setReadRoundTrems] = useState(false);
    const [passCode, setPassCode] = useState('');
    const isCheckingPassCode = useSelector(
        (state: AppState) => state.user.isCheckingPassCode,
    );
    const handlePassCodeChange = (e: any) => {
        const { value } = e.target;
        setPassCode(value);
    }
    const handleCheckPassCode = () => {
        dispatch(checkPassCode(passCode));
    }
    const handleReadCancelationTrems = (e: any) => {
        const { checked } = e.target;
        setReadCancelationTrems(checked)
    }
    const handleReadRoundTrems = (e: any) => {
        const { checked } = e.target;
        setReadRoundTrems(checked)
    }

    useEffect(() => {
        console.log({
            isCheckingPassCode,
            readCancelationTrems,
            readRoundTrems,
            passCode: passCode.length,
        });

        if (isCheckingPassCode) {
            setCanCheckPassCode(isCheckingPassCode)
        }
        else if (passCode.length > 5) {
            setCanCheckPassCode(
                readCancelationTrems === false ||
                readRoundTrems === false)
        } else {
            setCanCheckPassCode(true)
        }
        return () => {
        }
    }, [isCheckingPassCode, readCancelationTrems, readRoundTrems, passCode])
    return (
        <React.Fragment>
            <Container maxWidth="sm" className={classes.root} fixed>
                <img src={aiesec_logo} className="mom_logo" alt="logo" />
                <img src={logo} className="mom_logo" alt="logo" />
                <img src={welcome} className="welcome_text" alt="logo" />
                <Accordion square className='what_accordion'>
                    <AccordionSummary
                        expandIcon={<ContactSupportIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle1">What is Momentum 21?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
          </Typography>
                    </AccordionDetails>
                </Accordion>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={0}>
                    {/* <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="user_passcode">Enter Your PassCode Here</InputLabel>
                        <OutlinedInput 
                            id="user_passcode"
                            // className={classes.textField}
                            label="Enter Your PassCode Here"
                            onChange={(e) => handlePassCodeChange(e)}
                            value={passCode}
                            disabled={isCheckingPassCode}       
                        />
                    </FormControl> */}
                    <TextField
                        id="user_passcode"
                        // className={classes.textField}
                        label="Enter Your PassCode Here"
                        onChange={(e) => handlePassCodeChange(e)}
                        value={passCode}
                        disabled={isCheckingPassCode}
                        variant="outlined"
                        fullWidth
                    />
                    <Accordion className={classes.acknowledge}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <FormControlLabel
                                aria-label="Acknowledge"
                                onClick={(e) => handleReadCancelationTrems(e)}
                                onFocus={(e) => handleReadCancelationTrems(e)}
                                control={<Checkbox />}
                                disabled={isCheckingPassCode}
                                label="I did read the Cancelation Terms and Condidtions."
                            />

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="textPrimary" variant='body1' align="left">
                                <Typography variant='h5'>Cancelation policy</Typography>
                                <Typography variant='subtitle2' gutterBottom align="left">Merchandise pre-orders are excluded from the policy, No Refund for the pre-orders </Typography>
                                <Typography color="textSecondary" gutterBottom variant="subtitle2">- from <strong> &nbsp; 2/3/2021</strong>  &nbsp;till&nbsp; <strong> 7/3/2021 </strong>: 0% cancelation fees <strong>(Full refund)</strong></Typography>
                                <Typography color="textSecondary" gutterBottom variant="subtitle2">- from <strong> &nbsp; 8/3/2021</strong>  &nbsp;till&nbsp; <strong> 14/3/2021 </strong>: 25% cancelation fees <strong>(75% refund)</strong></Typography>
                                <Typography color="textSecondary" gutterBottom variant="subtitle2">- from <strong> &nbsp; 15/3/2021</strong>  &nbsp;till&nbsp; <strong> 24/3/2021 </strong>: 50% cancelation fees <strong>(50% refund)</strong></Typography>
                                <Typography color="textSecondary" gutterBottom variant="subtitle2">- from <strong> &nbsp; 25/3/2021</strong>  &nbsp;till&nbsp; <strong> 1/4/2021 </strong>: 75% cancelation fees <strong>(25% refund)</strong></Typography>
                                <Typography color="textSecondary" gutterBottom variant="subtitle2">- from <strong> &nbsp; 2/4/2021</strong>  &nbsp;till&nbsp; <strong> 8/4/2021 </strong>: 100% cancelation fees <strong>(0% refund)</strong></Typography>
                                <Typography color="error" variant="subtitle2"> All merchandise pre-orders will not be refunded</Typography>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Typography color="textPrimary" align="left" className={classes.acknowledge2}>

                        <FormControlLabel
                            aria-label="Acknowledge2"
                            onClick={(e) => handleReadRoundTrems(e)}
                            onFocus={(e) => handleReadRoundTrems(e)}
                            control={<Checkbox />}
                            disabled={isCheckingPassCode}
                            label="I here by agree that I will pay within 2 days after the current round deadline to the cod  or the amount will increase accordingly."
                        />
                    </Typography>
                    <div className={classes.wrapper}>
                        <Fab color="primary" className={classes.fab} disabled={canCheckPassCode} onClick={handleCheckPassCode}>
                            {isCheckingPassCode ?
                                <CircularProgress size={58} />
                                : <ChevronRightIcon className={classes.extendedIcon} />
                            }

                        </Fab>
                    </div>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Login;
// AASTA21
// AASTC20
// ASU019
// ALEX18
// AUC017
// CU0016
// DAM015
// GUC014
// HEL013
// MANS12
// MEN011
// MIU010
// SUEZ09
// TANTA8
// ZAG007
// LAA006
// BS0005
// KES004
// MSA003
// MUST02
// OCT001