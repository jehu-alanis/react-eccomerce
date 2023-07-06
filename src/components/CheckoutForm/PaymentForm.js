import { useState,React }from 'react';
import Review from './Review';
import LockIcon from '@material-ui/icons/Lock';
import { Divider, Typography, Button, CircularProgress, } from '@material-ui/core';
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"
import {getBasketTotal, actionTypes} from "../../reducer";
import {useStateValue} from "../../StateProvider";
import accounting from "accounting";
import axios from "axios";

const stripePromise = loadStripe("pk_live_51IvatVHhSm5BF1EZs47GocwaDJLLbloZXmeHGFtN0F3veJyMxNGfqBZBJKzR3T7K5oeGxuaz7gGDD4Dt1VTQDbgr00BvIpUgJb");

const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
        base: {
            iconColor: "rgb(240, 57, 122)",
            color: "#333",
            fontSize: "18px",
            "::placeholder": {
                color: "#ccc",
            },
        },
        invalid: {
            color: "#e5424d",
            ":focus": {
                color: "#303238"
            },
        },
    },
};


const CheckoutForm = ({ nextStep, backStep }) => {
    const [{basket},dispatch] = useStateValue();
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) =>{
        e.preventDefault();
     const {error, paymentMethod}  = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        setLoading(true);
         if(!error){
            const {id}= paymentMethod;
             try{
                
                /* const {data} = await axios.post("https://api-arktnla.herokuapp.com/api/checkout",{
                       id,
                       amount: getBasketTotal(basket) * 100,
                    }) */;    
                    
                    dispatch({
                        type: "succesful",
                        paymentMessage: data.message
                    })
                   


                    elements.getElement(CardElement).clear();
                    nextStep();

                 }catch(error){
                     console.log(error)
                    nextStep();
                }
                setLoading(false);
            }

        };

    if (!basket) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <div style={{ display: "flex",justifyContent: "space-between", marginTop:"1rem"}}>
            <Button variant="outlined" onClick={backStep}>Atrás</Button>
            <Button  disabled={false} type="submit"  variant="contained" color="primary" >
             {
                  loading ? (<CircularProgress/>) : (`Paga ${accounting.formatMoney(getBasketTotal(basket))} MXN`)
                  
                  }
            </Button>
            </div>
            <div style={{ display: "flex", justifyContent:"center" ,marginTop:"1rem"}}>
             <LockIcon fontSize='small' color="textPrimary"></LockIcon> 
             <Typography variant="caption" gutterBottom >
             La información de tu tarjeta esta encryptada.
            </Typography> 
            </div>
        </form>
    )
}

const PaymentForm = ({ nextStep, backStep }) => {
    return (
        <div>
            <Review />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
                Payment method
            </Typography>
            <Elements stripe={stripePromise}>
                <CheckoutForm backStep={backStep} nextStep={nextStep} />
            </Elements>
        </div>
    )
}

export default PaymentForm;
