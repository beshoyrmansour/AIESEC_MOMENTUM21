import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { IDOptions, IUserMerchandise, IUserInfo, IMerchandise } from '../../types';
import ACTION_TYPES from '../../redux/actionTypes';
import { getAllMerchandise } from '../../redux/actions/merchandiseActions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Grid from '@material-ui/core/Grid';
import { CircularProgress, Fab, Paper } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Modal from '@material-ui/core/Modal';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
interface Props {

}


const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        // width: 500,
        // height: 450,
    },
    cardRoot: {
        // maxWidth: 345,
    },
    media: {
        // minHeight: '140px',
        width: '100%'
    },
    cardActions: {
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'flex-end',
        padding: 0
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    fab: {
        position: 'fixed',
        top: '24px',
        right: '14px',
        zIndex: 9
    },

    paper: {
        position: 'absolute',
        width: '100%',
        maxWidth: '550px',
        // backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    noItems: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    basketItem: {
        marginTop: theme.spacing(2),
    },
    itemTitle: {
        flexGrow: 1
    }
}));


const MerchandiseSelector = (props: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [basketTotalCount, setbasketTotalCount] = useState(0)
    const userInfo = useSelector((state: AppState) => state.user.userInfo) as IUserInfo;
    const MerchandiseList = useSelector((state: AppState) => state.merchandise.MerchandiseList) as IMerchandise[];
    const isLoadingMerchandiseList = useSelector((state: AppState) => state.merchandise.isLoadingMerchandiseList);
    const userMerchandise = useSelector((state: AppState) => state.merchandise.userMerchandise) as IUserMerchandise[];
    const [modalStyle] = React.useState({
        top: `${50}%`,
        left: `${50}%`,
        transform: `translate(-${50}%, -${50}%)`,
    });
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        dispatch(getAllMerchandise())
        return () => {

        }
    }, [])

    useEffect(() => {
        let newCount: number = 0;
        userMerchandise.map(item => newCount += item.quantity)
        setbasketTotalCount(newCount)

    }, [userMerchandise])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const decrementItemCount = (merch: IMerchandise) => {
        const selectedMerchIndex = userMerchandise.findIndex(item => item.type === merch.type)
        let newList = [] as IUserMerchandise[];
        if (selectedMerchIndex !== -1) {
            userMerchandise.forEach((item: IUserMerchandise, index: number) => {
                if (item.quantity > 1) {

                    newList.push({
                        ...item,
                        quantity: selectedMerchIndex === index ? item.quantity - 1 : item.quantity,
                    })
                }
            })


            dispatch({
                type: ACTION_TYPES.USER_MERCHANDISE.SET,
                payload: [...newList]
            })
        }

    };
    const removeFromBasket = (merch: IUserMerchandise) => {

        dispatch({
            type: ACTION_TYPES.USER_MERCHANDISE.SET,
            payload: [...userMerchandise.filter(item => item.type !== merch.type)]
        })
    };
    const getMerchCountInBasket = (merch: IMerchandise) => {
        let count: number = 0;
        const selectedMerchIndex = userMerchandise.findIndex(item => item.type === merch.type)
        if (selectedMerchIndex !== -1) count = userMerchandise[selectedMerchIndex].quantity
        return <>{count}</>
    };
    const incrementItemCount = (merch: IMerchandise) => {
        const selectedMerchIndex = userMerchandise.findIndex(item => item.type === merch.type)
        let newList = [] as IUserMerchandise[];
        if (selectedMerchIndex !== -1) {
            userMerchandise.forEach((item: IUserMerchandise, index: number) => {
                newList.push({
                    ...item,
                    quantity: selectedMerchIndex === index ? item.quantity + 1 : item.quantity,
                })
            })
        }
        else {
            let newItem: IUserMerchandise = {
                type: merch.type,
                merchTypeName: merch.merchTypeName,
                quantity: 1,
                price: merch.price,
                // size: merch.size,
            }
            if ("size" in merch)
                newItem.size = merch.size;
            newList = [...userMerchandise, newItem]
        }
        dispatch({
            type: ACTION_TYPES.USER_MERCHANDISE.SET,
            payload: [...newList]
        })
    }


    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} justify="center" alignItems="center" spacing={3}>
                <Typography variant="h4" color="textSecondary" component="h4" gutterBottom >Select you Merchandise</Typography>
            </Grid>
            <div className={classes.fab}>
                <Fab variant="extended" color="primary" onClick={handleOpen}>
                    <ShoppingBasketIcon className={classes.extendedIcon} />
                    {basketTotalCount}
                </Fab>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <Paper style={modalStyle} className={classes.paper}>
                        <Typography variant="h4" color="textSecondary" component="h4" id="simple-modal-title">Your Merchandise Basket</Typography>
                        {userMerchandise.length > 0 ? userMerchandise.map((merch: IUserMerchandise) => (
                            <Card className={classes.basketItem}>
                                <CardContent>
                                    <Grid container justify="space-between" alignItems="center">
                                        <Typography variant="subtitle1" color="textSecondary" component="p" className={classes.itemTitle}>{merch.merchTypeName} </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            {`${merch.price} LE x ${merch.quantity} = `}
                                            <strong>{` ${'price' in merch && merch.price * merch.quantity} LE`}</strong>
                                        </Typography>
                                        <Button size="small" color="primary" onClick={() => removeFromBasket(merch)}><DeleteForeverIcon color="error" /></Button>

                                    </Grid>
                                </CardContent>
                            </Card>)) : <Typography variant="h5" className={classes.noItems}>No Merchandise listed in your Basket yet</Typography>}

                    </Paper>
                </Modal>
            </div >
            <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                    {isLoadingMerchandiseList ? <div className="loading-wrapper">
                        <CircularProgress /></div> : MerchandiseList.map(merch => (
                            <Grid key={merch.id} item xs={12} md={6} lg={4}>
                                <Card className={classes.cardRoot}>
                                    <CardActionArea>
                                        <img
                                            className={classes.media}
                                            src={`data:image/png;base64,${merch.imageBase64}`}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {merch.merchTypeName}
                                            </Typography>
                                            <Grid container justify="space-between" alignItems="center">
                                                <Typography variant="subtitle1" color="textSecondary" component="p">{merch.price} LE </Typography>
                                                <CardActions className={classes.cardActions}>
                                                    <Button size="small" color="primary" onClick={() => decrementItemCount(merch)}><RemoveIcon /></Button>
                                                    <Typography gutterBottom variant="h5" component="h2">{getMerchCountInBasket(merch)}</Typography>
                                                    <Button size="small" color="primary" onClick={() => incrementItemCount(merch)}><AddIcon /></Button>
                                                </CardActions>
                                            </Grid>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </Grid >

    )
}

export default MerchandiseSelector
