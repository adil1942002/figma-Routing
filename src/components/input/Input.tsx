import * as React from 'react';
import TextField from '@mui/material/TextField/TextField';
type propsType ={
    type:string,
    placeholder:string,
    getValue ? :any
}

export default function Inputs (props:propsType){
    const { type, placeholder, getValue }=props
    
    return<>

        <TextField type={type}  label={placeholder} variant='outlined' 

        onChange={(e) => getValue(e) }/>
    </>
}