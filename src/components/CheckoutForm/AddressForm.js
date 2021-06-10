import {React} from 'react'
import { Typography, Grid, Button } from '@material-ui/core';
import {useForm,FormProvider} from 'react-hook-form';
import AddressInput from './AddressInput';
import { Link } from "react-router-dom";
import {useStateValue} from "../../StateProvider";
import {actionTypes} from "../../reducer";

const AddressForm = ({nextStep}) => {
const methods = useForm();
const [{shippingData},dispatch] = useStateValue();

return (
        <div>
            <Typography component="h6" gutterBottom>
              Casi es tuyo
             </Typography>
             <FormProvider {...methods}>
             
             <form onSubmit={methods.handleSubmit(data => {
                 dispatch({
                 type: actionTypes.SET_SHIPPINGDATA,
                 shippingData: data,
                });
                
                nextStep();
             })}>
             
                 <Grid container spacing={3}>
                 <AddressInput required name="FirstName" label="FirstName"/>
                 <AddressInput required name="LastName" label="LastName"/>
                 <AddressInput required name="Email" label="Email"/>
                 
                 </Grid>
                 <div style={{display: "flex",justifyContent: "space-between", marginTop:"1rem"}}>
                 <Button type="submit" variant="contained" color="primary">
                     Next
                 </Button>
                 <Button component={Link} to="/checkout-page">
                     Volver 
                 </Button>
                 </div>
                 
             </form>
             </FormProvider>
             
        </div>
    )
}

export default AddressForm
