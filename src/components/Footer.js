import React, {Fragment}from 'react';
import { Link  } from 'react-router-dom';
import {  makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles( ({
    root: {
      flexGrow: 1,
      backgroundColor: "#990000",
      paddingBottom: "1px",      

    }
  }));

const Footer = () => {
    const classes = useStyles();
   
    return (
      <Fragment>
           <div className={classes.root}>
            <div className="footer-copyright text-center " style={{paddingTop: "10px"}}>
    <p style={{color: "white"}}>
    &copy; {new Date().getFullYear()} Copyright: Jehu Alanis Ozuna      
        
    </p>
             
      </div>
      <div className="footer-copyright text-center ">
      <Link to='/politica'  style={{ textDecoration: 'none' }}> 
      <p style={{color: "white"}}>
      
      POLÍTICA DE PRIVACIDAD 
      </p>
           
        </Link>
        </div>
        
        </div>
        </Fragment>
      
    );
}
 
export default Footer;