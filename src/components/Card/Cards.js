import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'


function Cards( {data}) {

const selected = data.slice(0,10)

  return(
  <div>
   
   <Grid container spacing={5} justifyContent={'center'} >
  {selected.map( (item , index) => {
    console.log(selected)
    return(
       <Card>
      <div className='card-container' key={index}>
        <CardContent>
          <Typography gutterBottom variant='h5'>BitCoin name : {item.symbol}</Typography>
          <Typography variant="body2" color="text.secondary">
            <p>price open : {item.openPrice} price change : {item.priceChange} price close : {item.prevClosePrice}</p>
          </Typography>
           
        </CardContent>
       
        </div>
        </Card>
    )
  })}

</Grid>
  
   </div>

  )
  
}

export default Cards