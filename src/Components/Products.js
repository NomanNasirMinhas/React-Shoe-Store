import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import data from "./assets/data.json";
import CardTemp from "./Card";
import { Button } from "@material-ui/core";
import "./css/home.css";
import {TransactionContext, TransactionProvider} from './../cartContext';

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

  title: {
    color: "#F3F3F3",
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Righteous",
  },

  desc: {
    color: "#FF6100",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Fredoka One",
  },

  btn: {
    borderRadius: 20,
    padding: "0.125rem 0.75rem",
    borderColor: "#becddc",
    fontSize: "0.75rem",
  },

  divider: {
    height: 400,
  },

  buttons: {
    borderRadius: 20,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "white",
    padding: "0.125rem 0.75rem",
    fontSize: 18,
    fontFamily: "Righteous",
    color: "white",
    backgroundColor: "#FF6202",
    width: 250,
    margin: "0 auto",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  console.log(data["shoes1"]);
  return (

      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1 className={classes.title}>All Products</h1>
          </Paper>
        </Grid>
        {Object.keys(data).map((keyName) => {
          return (
            <Grid item xs={12} sm={3}>
              <CardTemp shoe={keyName} />
            </Grid>
          );
        })}
      </Grid>
    </div>

  );
}
