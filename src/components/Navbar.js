import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/arkadia.jpg'
import {ShoppingCart} from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "4rem",
  },
  appBar:{
    backgroundColor: "#990000",
    boxShadow: "none",
  },
  grow:{
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
    
  },
  
  image: {
    marginRight: "10px",
    height: "3rem",
  },
  
}));

export default function Navbar() {
  const classes = useStyles();
  const [{basket}] = useStateValue();
 
  
  
  if (!basket) {
    return null;
}

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Link to="/">
          <IconButton edge="start" className={classes.button} color="inherit" aria-label="menu">
            <img src={logo} alt="arkadia" className={classes.image}/>
          </IconButton>
      </Link>
      <div className={classes.grow}/>
    
      <Typography variant="h6" color="inherit">
                    ARKADIA SHOP
                </Typography>

                <div className={classes.grow}/>
    
        
          <Link to="/checkout-page">
          <IconButton arial-label="show cart items" color="primary">
          <Badge badgeContent={basket.length} color="secondary">
          
          <ShoppingCart fontSize='large' color="inherit" />
          
          </Badge>
          </IconButton>
          </Link>
          
     
        </Toolbar>
      </AppBar>
    </div>
  );
}
