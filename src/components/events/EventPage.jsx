import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import data from './data'
import EventCard from './EventCard'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    margin: {
        margin: 30,
    },
    grid: {
        maxHeight: 200,
    }
}));

const EventPage = () => {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={6} sm={6} md={6} className={classes.grid} ><Button size="large" color="primary" variant="contained" className={classes.margin}>POPULAR GROUPS</Button></Grid>
            <Grid item xs={6} sm={6} md={6} className={classes.grid}><h2 className={classes.margin}>UPCOMING EVENTS</h2></Grid>
            <Grid container >
                {
                    data.map((item, index) => {
                        return (
                            <Grid item xs={6} sm={3} key={index}>
                                <EventCard data={item} />
                            </Grid>)
                    })
                }
            </Grid>

        </Grid>
    );
}

export default EventPage;