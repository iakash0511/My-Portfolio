import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Typewriter from "typewriter-effect";

export default function HomePageComponent() {
    const [hoverLeft,setHoverLeft] = React.useState(true)
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} >
                <Grid item  xs={3} 
                sx={{backgroundColor:hoverLeft?'orangered':'black',color:hoverLeft?'black':'orangered',cursor:'pointer'}} 
                onMouseEnter={()=>setHoverLeft(true)} 
                onMouseLeave={()=>setHoverLeft(false)}
                >
                    <Typography variant='h5' align='center' marginTop='50vh' marginBottom='45.5vh'fontWeight={900}>
                        Professional
                    </Typography>
                </Grid>
                <Grid item xs={9} sx={{backgroundColor:hoverLeft?'black':'orangered',color:hoverLeft?'orangered':'black',cursor:'pointer'}}>
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("Hi, Welcome to Akash Portfolio")
                    .pauseFor(5000)
                    .start();
                    }}
                />
                    <Typography variant='h5' marginTop='47vh' align='center' fontWeight={900}>
                        Developer 
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}
