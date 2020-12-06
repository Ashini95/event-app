import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin: 30
    },
    media: {
        height: 200,
    },
    margin: {
        marginLeft: 30
    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        marginRight: 2
    }
});

export default function MediaCard(props) {
    const classes = useStyles();
    const { data } = props

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={data.backgroundImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <EventAvailableIcon className={classes.wrapIcon} />  {data.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <ScheduleIcon className={classes.wrapIcon} />{data.time}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <PeopleIcon className={classes.wrapIcon} /> {data.numberOfSeats} seats
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.cost}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
