import React, {useContext, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import data from "./assets/data.json";
import CardTemp from "./Card";
import { Button } from "@material-ui/core";
import "./css/home.css";
import { useParams } from "react-router-dom";
import {TransactionContext} from './../cartContext';
import store from 'store';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  paper: {
    padding: 0,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "transparent",
    margin: "0 auto",
  },
  image: {
    widht: '90%',
    margin:30,
  },

  title: {
    color: "#F3F3F3",
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Righteous",
  },

  h2: {
    color: "#F3F3F3",
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },

  desc: {
    color: "#FF6100",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Pacifico",
  },

  btn: {
    borderRadius: 20,
    padding: "0.125rem 0.75rem",
    borderColor: "#becddc",
    fontSize: "0.75rem",
  },

  divider: {
    width: 50,
  },

  buttons: {
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    padding: "0.125rem 0.75rem",
    fontSize: 14,
    fontFamily: "Righteous",
    color: "white",
    backgroundColor: "#FF6202",
    width: 150,
    margin: "0 auto",
  },
}));

export default function ProductItem() {
  let { id } = useParams();
  console.log(id);
  console.log(data);
  const classes = useStyles();

  let {transactions, addTransaction} = useContext(TransactionContext)
   // let [newShoe, setShoe] = useState("");

   var handleAddition = (event) =>{
    event.preventDefault();
    var retrievedData = localStorage.getItem("cart");
    var cartInitial = JSON.parse(retrievedData);
    if (retrievedData==null){
      cartInitial = []
    }

      console.log(cartInitial)
      cartInitial.push(id);
      var cartPushed = JSON.stringify(cartInitial);
      //var initialState = JSON.parse(localStorage.getItem("cart"));
      localStorage.setItem('cart', cartPushed);
      alert("Item Added to the Cart");

}

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h1 className={classes.title}>{data[id].name} Details</h1>
        </Paper>
        </Grid>

        <Grid item xs={12}>
        <Paper className={classes.paper}>
        <span className={classes.desc}>Price = {data[id].price} $</span>
      <span className={classes.desc}>   ====>   </span>
      <span>
        <Button className={classes.buttons} onClick={handleAddition}>Add to Cart</Button>
      </span>
        </Paper>
        </Grid>

        <Grid item xs={12}>
        <Paper className={classes.paper}>
        <img src={data[id].img} alt="Not Found"/>
        </Paper>
        </Grid>

        </Grid>


    </div>
  );
}
