
import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const state = () => {
 
  var[name,setname]=useState("Gopika")
  var[value,setvalue]=useState()

    const handleInput=(e)=>{
    console.log(e.target.value)
    setname(e.target.value)
  }
  const onsubmit =()=>{
    console.log("clicked")
    setvalue(name)
  }
 
  return (
    <div>
      <Typography variant='h6'>
        Welcome {value}
      </Typography>
      <TextField variant='outlined'onChange={handleInput}label='Enter Name'/><br /><br />
      <Button variant='outlined' color='' onClick={onsubmit}submit> Submit</Button>
    </div>
  )
}

export default state