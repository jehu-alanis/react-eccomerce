import {React, useState} from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import products from '../products-data';
import Carrosuel from './Carrosuel';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "#000000",
   
  },
  search: {
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#faf7f7',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    padding: '0 rem 1rem',
    width: '100%',
    display: 'flex',
    boxSizing: 'content-box',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(45),
      width: '50%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  inputRoot: {
    color: 'inherit',
  }
}));


export default function Products(props) {


  const [searchTerm, setSearchTerm] = useState('');

  
  const classes = useStyles();

  return (

    <div className={classes.root}>

<div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}

              onChange={(event) => {
                setSearchTerm(event.target.value);
                
            }}

            />
          </div>
         

<div className={classes.root}>
<Carrosuel/>

</div>
  
      <Grid container spacing={3}>
      
      
        {
            products.filter((product)=>{
                 if( searchTerm === ""){
                     return product
                 } else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())){
                     return product  
                 }
            }).map((product,i) =>(
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>  
     
            <Product  key={product.id} product={product}/> 
            </Grid>
            ))
        }
      </Grid>
      
    </div>
       
    );
}
