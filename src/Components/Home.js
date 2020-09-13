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
    fontFamily: "Righteous",
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

export default function Home() {
  const classes = useStyles();
  //const [cart, setCart] = useState([]);

  console.log(data["shoes1"]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1 className={classes.title}>Boot&Camp Store</h1>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1 className={classes.desc}>Featured This Month</h1>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <CardTemp shoe="shoes1"  />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CardTemp shoe="shoes4" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CardTemp shoe="shoes9" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CardTemp shoe="shoes7" />
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1 className={classes.title}>About Us</h1>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1 className={classes.h2}>
              Here at 'Boot&Camp', we realize that style and prosperity begin
              with the correct shoes. We likewise understand that effectively
              finding the size and style to meet your requirements is vital to
              your web based shopping knowledge. Since beginning our web based
              business website in 2009, we’ve been endeavoring to present to you
              that perfect shopping experience.
              <br />
              We pride ourselves on conveying hard-to-discover styles, sizes and
              widths since we realize that each individual’s needs contrast.
              Regardless of whether you’re experiencing issues looking over our
              vast determination of different shoes or you have a
              straightforward inquiry, our client benefit group is prepared and
              willing to help.
              <br />
              Some time before our online business, our family shoe stores,
              fatherly shoe store Footwear in Indianapolis, IN, opened its
              entryways in 1886. Today we are glad to state that we have the
              longest constantly running shoe store in the United States. The
              life span of our physical business is a demonstration of our duty
              to you and the majority of our clients. We realize that on the off
              chance that you are not content with our items and
              administrations, we are not carrying out our responsibility.
              <br />
            </h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
