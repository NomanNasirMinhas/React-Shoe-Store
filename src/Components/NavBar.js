// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
// import MenuIcon from '@material-ui/icons/Menu';
// //import {Link} from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 0,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function NavBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Shoes Tracker App
//           </Typography>
//           {/* <Button onClick='/' to>Home</Button> */}
//           <Button ><Link exact to="/products">Products</Link></Button>
//           <Button ><Link exact to="/about">About Us</Link></Button>

//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
