import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Newmovie = () => {
  return (
    <Box sx={{ flexgrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    movies
                </Typography>
                <Button><Link to = '/Movie' style={{color:"white"}}>movies</Link></Button>
                <Button><Link to = '/addMovie' style={{color:"white"}}>add movies</Link></Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Newmovie
