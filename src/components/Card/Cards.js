import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'


function Cards( {data }) {

 
  if(data.length < 0){
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
          <Typography variant="body2" color="text.secondary">
            <p>price open : {item.openPrice} price change : {item.priceChange} price close : {item.prevClosePrice}</p>
          </Typography>
           
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