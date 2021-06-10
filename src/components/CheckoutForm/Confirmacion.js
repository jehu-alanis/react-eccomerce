import { useState, React } from 'react'
import { Typography, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from '@material-ui/core/Link';
import { Link as Router } from 'react-router-dom';
import QRCode from "react-qr-code";
import {useStateValue} from "../../StateProvider";
import { actionTypes } from '../../reducer';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
  justifyContent: 'center',


        
    },

    qr:{
        display: 'flex',
        flexDirection: 'column',
    },
}));


function getLabelByStatus(message) {
    return mapLabels[message] || <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Hubo un problema con el pago no se hizo cargo alguno. 
        Trata de intentarlo de nuevo o comunicate con tu banco 
    </Alert>
    }

const mapLabels = {
    succesful: <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        <strong>Gracias por tu compra!</strong> —
        Recogelo cuando gustes, toma captura o descarga este codigo QR y presentalo —
        O contacta con ARKADIA para una entrega hasta tu casa (costo extra)
        "Preciona el Boton de INICIO para continuar".
  </Alert>

};

function getLabelByStatus2(message) {
    return mapLabels2[message] || <Alert severity="error">

        <strong>Disculpa! :(</strong>
    </Alert>;
}


const mapLabels2 = {
    succesful: <Alert severity="success">
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
        }}>
            <WhatsAppIcon fontSize='large' ></WhatsAppIcon> &nbsp;
             <Typography variant="h5" gutterBottom >
                966 122 3310
             </Typography>

            <FacebookIcon fontSize='large' color="primary"></FacebookIcon> &nbsp;
             <Link color="inherit" href="https://www.facebook.com/arkadiajuegos">
                <Typography variant="h5" gutterBottom > Arkadia </Typography>
            </Link>

        </div>


    </Alert>

};





function Fecha ({basket,shippingData}) {


const datos = Object.values(shippingData)


const precio = basket.map(x => x.price);
const compra = basket.map(x => x.description);
const total = precio.reduce((acc,amount)=> acc + amount ,0);
var hoy = new Date();  
let date = hoy.getDate();
let month = hoy.getMonth() + 1;
let year = hoy.getFullYear();
var hora  = hoy.getHours();
var minutos = hoy.getMinutes();
var fechaYHora = `Se pago el dia ${date<10?`0${date}`:`${date}`} / ${month<10?`0${month}`:`${month}`} / ${year} \n
A las ${hora<10?`0${hora}`:`${hora}`} : ${minutos<10?`0${minutos}`:`${minutos}`}  ${hora<12?`A.M.`:`P.M.` } \n
* ${compra} \n \n $ ${precio} \n \n Total: ${total} Pesos \n \n A nombre de ${datos.toString()} 
\n \n ¡Gracias por confiar en arkadia! `;

return fechaYHora ;
}


const Confirmacion = ({ message }) => {
    const [{basket,shippingData},dispatch] = useStateValue();
    const [text, setText] = useState( Fecha({basket,shippingData}) );
    
    const classes = useStyles();
    const removeItem = () => {
     
                        dispatch({
                            type: actionTypes.EMPTY_BASKET,
                            basket: [],
                        })
                     
     };

    return (
        <div className={classes.root}>
            <Typography variant="h6"> {getLabelByStatus(message)}</Typography>
            { message === "succesful" 
            ? <QRCode value={text }  size={256}  level="H" />
             : ""
             }
            
            <Divider />
            <Typography variant="h6"> {getLabelByStatus2(message)}</Typography>
            <Divider />
            <Button component={Router} to='/' color="secondary" variant='outlined' type='button' onClick={removeItem}>
                Inicio
            </Button>
        </div>
    )
}

export default Confirmacion
