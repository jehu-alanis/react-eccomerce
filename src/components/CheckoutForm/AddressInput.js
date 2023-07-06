import React from 'react';
import {useFormContext,Controller} from 'react-hook-form';
import { Grid, TextField } from '@material-ui/core';

 const AddressInput = ({name,label,required}) => {
    const {control} = useFormContext();
   // const methods = useFormContext();
    return (
        <Grid  item xs={12} sm={6}>
     <Controller as = {TextField}
                control={control} 
                name={name} 
                        
                 render = {({ field})=> (
                    <TextField
                    {...field}
                        fullWidth
                        label={label}
                        required={required}
                        defaultValue=""
                        
                    />
                )}
                >
     </Controller>
        </Grid>
    )
}
export default AddressInput
