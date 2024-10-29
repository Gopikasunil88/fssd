import { AppBar, Button,Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
    <AppBar color='secondary'>
        <Toolbar>
        <Typography Variant='h6'> my app3</Typography>
        &nbsp; &nbsp;
        <Link to='/s'> 
        <Button variant='contained'>state</Button>
        </Link> &nbsp; &nbsp;
        <Link to='/c'> 
        <Button variant='contained'>Counter</Button>
        </Link>&nbsp; &nbsp;
        <Link to='/n'> 
        <Button variant='contained'>Name</Button>
        </Link>
        </Toolbar>       
    </AppBar>
    <br /><br /><br />
    </div>
  )
}

export default Navbar
