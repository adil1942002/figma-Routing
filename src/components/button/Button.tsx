import React from 'react';
import { useState } from 'react';
import { Button} from '@mui/material';
type propsType ={
    lable :string,
} 
export default function Btn(props: propsType ){
    const {lable}=props
    
    return<>
    <Button variant='contained' color='error' className='text-dark' onClick={()=>{}
    }>{lable}</Button>
               </>
}