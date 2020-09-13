import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import data from "./assets/data.json";
import { Button } from "@material-ui/core";
import "./css/home.css";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Money";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

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

  total: {
    width: '60%',
    textAlign: "center",
    color: theme.palette.text.primary,
    backgroundColor: "#73C6B6",
    margin: "0 auto",
  },

  title: {
    color: "#F3F3F3",
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Righteous",
  },

  desc: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Fredoka One",
    alignContent: "left",
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

  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#EAEDED",
  },
}));

export default function FullWidthGrid() {
  var totalPrice = 0;
  const classes = useStyles();
  var retrievedData = localStorage.getItem("cart");
  var cartNow = JSON.parse(retrievedData);
  console.log(cartNow);
  let history = useHistory();
 // var cartInitial = JSON.parse(retrievedData);
  if (retrievedData==null){
    cartNow = []
  }

  const handleCheckOut = () => {
    alert("You checked Out, Your Cart has been cleared");
    localStorage.clear();
    history.push("/");
  };

  if (cartNow.length == 0 || cartNow == null)
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1 className={classes.title}>Cart</h1>
              <h1 className={classes.title}>Cart Empty</h1>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1 className={classes.title}>Cart</h1>
          </Paper>
        </Grid>
        <Paper className={classes.total}>
          <List className={classes.root}>
            {Object.keys(cartNow).map((keyName, value) => {
              var currentVal = cartNow[keyName].toString();
              totalPrice = totalPrice + Number(data[currentVal].price);
              return (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={data[currentVal].img} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={data[currentVal].name}
                    secondary={data[currentVal].price}
                    className={classes.desc}
                  />
                </ListItem>
              );
            })}

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Total"
                secondary={totalPrice}
                className={classes.desc}
              />
            </ListItem>
          </List>
        </Paper>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button className={classes.buttons} onClick={handleCheckOut}>
              Checkout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
