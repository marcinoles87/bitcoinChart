import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'


function Cards( { data }) {

  const {openPrice } = data

console.log(openPrice)
 
  if(data.length < 1){
    return('Loading...')
  }

const selected = data.slice(0,3)

  return(
  <div>
   
   <Grid container spacing={5} justifyContent={'center'} >
  {selected.map( (item , index) => {
    console.log(selected)
    return(
       
      <div className='card-container' key={index}>
        <Card>
        <CardContent>
          <Typography gutterBottom variant='h5'>BitCoin name : {item.symbol}</Typography>
          <Typography variant="body2" color="text.secondary">{item.openPrice} </Typography>
          <Typography variant="body2" color="text.secondary">{item.priceChange} </Typography>
          <Typography variant="body2" color="text.secondary">{item.prevClosePrice} </Typography>

           
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