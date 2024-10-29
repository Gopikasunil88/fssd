import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Name = () => {
    var[x,setX]= useState();
    const input =()=>{
        setX("React")
    }
    const input2 =()=>{
        setX("Anguler")
    }
    const input3 =()=>{
        setX("Next")
    }
 
    useEffect(()=>{
        input2()
    },[])
      return (
    <div>
       <Typography variant="h4">Welcome{x}</Typography> 
       <Button variant="contained" color='primary'onClick={input}>REACT</Button>
       &nbsp; &nbsp;
       <Button variant="contained" color='secondary'onClick={input2}>ANGULER</Button> 
        &nbsp; &nbsp;
       <Button variant="contained" color='success'onClick={input3}>NEXT</Button>
    </div>
  )
}

export default Name
