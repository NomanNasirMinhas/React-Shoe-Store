import React, {useContext, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import data from "./assets/data.json";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#CB0000",
  },
  media: {
    height: 200,
  },

  btn: {
    borderRadius: 20,
    borderWidth: 3,
    padding: 3,
    borderColor: "black",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Righteous",
    color: "white",
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Righteous",
    color: "white",
  },
  h4: {
    fontSize: 18,
    fontFamily: "Righteous",
    color: "white",
  },
  link:{
    color:'white'
  }
});

export default function CardTemp({ shoe }) {
  const classes = useStyles();

    var handleAddition = (event) =>{

      event.preventDefault();

      var retrievedData = localStorage.getItem("cart");
      var cartInitial = JSON.parse(retrievedData);
      if (retrievedData==null){
        cartInitial = []
      }

      console.log(cartInitial)
      cartInitial.push(shoe);
      var cartPushed = JSON.stringify(cartInitial);
      localStorage.setItem('cart', cartPushed)
      alert("Item Added to the Cart");

  }

  return (

      <Card className={classes.root}>
      <Link to={`/product/${shoe}`} className={classes.link}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data[shoe].img}
            title={data[shoe].name}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.h3}
            >
              {data[shoe].name}
            </Typography>
            <Typography className={classes.h4}>
              Price = {data[shoe].price} $
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions>
        <Button color="primary" className={classes.btn} onClick={handleAddition}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>


  );
}
