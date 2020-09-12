import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: '#CB0000',


  },
  media: {
    height: 200,
  },

  btn: {
    borderRadius: 20,
    borderWidth: 3,
    padding: 3,
    borderColor: 'black',
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: 'Righteous',
    color: 'white',
  },
  h3:{
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Righteous',
    color: 'white',
  },
  h4:{
    fontSize: 18,
    fontFamily: 'Righteous',
    color: 'white',
  },




});

export default function CardTemp({shoe}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={shoe.img}
          title={shoe.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.h3}>
          {shoe.name}
          </Typography>
          <Typography  className={classes.h4}>
            Price = {shoe.price} $
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" className={classes.btn}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}