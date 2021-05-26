import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      minWidth:  100,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      textAlign:"center"
    },
    pos: {
      marginBottom: 12,
    },
  });
  
const UserItem = ({item}) => {

    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (
        <div style ={{float:"left",padding:"20px"}}>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <img style ={{height :"50px"}} src= {item.imagesUrl} alt="" />
        </Typography>
        <Typography variant="h5" component="h2">
        <h6>{item.name}</h6>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Price: ${item.price}
        </Typography>
    
      </CardContent>
    </Card>
        </div>
    );
};

export default UserItem;