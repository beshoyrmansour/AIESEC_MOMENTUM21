import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { IDOptions, IMerchandise, IUserInfo, MerchandiseReducer } from '../../types';
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
import MinimizeIcon from '@material-ui/icons/Minimize';
interface Props {

}


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        // height: 140,
        width:'100%'
    },
}));


const MerchandiseSelector = (props: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const userInfo = useSelector((state: AppState) => state.user.userInfo) as IUserInfo;
    const MerchandiseList = useSelector((state: AppState) => state.merchandise.MerchandiseList) as IMerchandise[];

    useEffect(() => {
        dispatch(getAllMerchandise())
        return () => {

        }
    }, [])
    return (
        <div>
            {MerchandiseList.map(merch => (
                <Card className={classes.root}>
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
                            <Typography variant="subtitle1" color="textSecondary" component="p">
                                {merch.price} LE
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <MinimizeIcon />
                        </Button>
                        <Typography gutterBottom variant="h5" component="h2">
                            0
                        </Typography>
                        <Button size="small" color="primary">
                            <AddIcon />
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default MerchandiseSelector
