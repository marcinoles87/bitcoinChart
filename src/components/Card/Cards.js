import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'


function Cards( { data }) {

 
  if(data.length < 1){
    return('Loading...')
  }

const selected = data.slice(0,3)

  return(
  <div>
   
   <Grid container spacing={5} justifyContent={'center'} >
  {selected.map( (item , index) => {

    const {symbol , openPrice  , prevClosePrice , priceChange} = item
    console.log(selected)
    return(
       
      <div className='card-container' key={index}>
        <Card>
        <CardContent>
          <Typography gutterBottom variant='h5'>BitCoin name : {symbol}</Typography>
          <Typography variant="body2" color="text.secondary">Open price :{openPrice} </Typography>
          <Typography variant="body2" color="text.secondary">Change price : {priceChange} </Typography>
          <Typography variant="body2" color="text.secondary">Close price : {prevClosePrice} </Typography>

           
        </CardContent>
        </Card>
       
        </div>
      
    )
  })}

</Grid>


  
   </div>

  )
  
}

export default Cards