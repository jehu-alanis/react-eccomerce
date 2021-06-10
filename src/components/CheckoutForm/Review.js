import React from 'react'
import { Typography, TextField, List, ListItem,ListItemText, } from '@material-ui/core';
import {useStateValue} from "../../StateProvider";
import {getBasketTotal} from "../../reducer";
import accounting from "accounting";

const Review = () => {

    const [{basket}] = useStateValue();
    if (!basket) {
        return null;
    }

    return (
        <div>
            <Typography variant='h6' gutterBottom>
            Resumen del pedido
            </Typography>
            <List disablePadding>
            {
                     basket.map(product=>(
                        <ListItem key={product.name}>
                         <ListItemText primary={product.name} secondary={`Cantidad : ${1} `}></ListItemText>
                         <Typography variant="body2">
                         {accounting.formatMoney(product.price)}
                         </Typography>
                        </ListItem>
                     ))
                }
                <ListItem>
                    <ListItemText primary="Total"></ListItemText>
                     <Typography variant="subtitle1">
                      {accounting.formatMoney(getBasketTotal(basket))} 
                     </Typography>
                    
                </ListItem>
              
            
            </List>
        </div>
    )
}

export default Review;
