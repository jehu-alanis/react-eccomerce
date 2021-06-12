import accounting from "accounting";
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {getBasketTotal} from "../reducer";
import { useStateValue } from '../StateProvider';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height:"20vh",
    },
    button: {
      marginTop: "2rem",
    },
  
    media: {
      height: 1,
      paddingTop: '56.25%', // 16:9
    },
    cardActions:{
        display: "flex",
        justifyContent: "space-between",
        textAling: "center",
    },
    cardRating:{
      display: "flex",
    },
    
  }));

  

const Total = () =>{
    const classes = useStyles();
    const [{basket}] = useStateValue();

    if (!basket) {
      return null;
  } 

  return(
        <div className={classes.root}>
        <h5>Total items: {basket.length}</h5>
        <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
        <Link to="/checkout"  style={{ textDecoration: 'none' }}>
        <Button className={classes.button} variant= "contained" color="secondary" >Compra ahora</Button>
        </Link>
        </div>
    )

  }


export default Total;