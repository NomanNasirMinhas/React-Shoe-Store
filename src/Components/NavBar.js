import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ListIcon from "@material-ui/icons/List";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Home from "@material-ui/icons/Home";
import { AddShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    color: "white",
    fontFamily: "Righteous",
  },

  anchor: {
    color: "white",
    fontFamily: "Righteous",
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="secondary" variant="extended">
        <Home className={classes.extendedIcon} />
        <a href="/" className={classes.anchor}>
          Home
        </a>
      </Fab>

      <Fab color="secondary" variant="extended">
        <ListIcon className={classes.extendedIcon} />
        <a href="/products" className={classes.anchor}>
          All Products
        </a>
      </Fab>

      <Fab color="secondary" variant="extended">
        <AddShoppingCartIcon className={classes.extendedIcon} />
        <a href="/checkout" className={classes.anchor}>
          Cart
        </a>
      </Fab>

    </div>
  );
}
