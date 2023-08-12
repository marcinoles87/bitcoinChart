import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';



function Cards( { data }) {

 
  if(data.length < 1){
    return('Loading...')
  }

const selected = data.slice(0,3)
const d = new Date() ;

const nowaData = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`

  return(
  <div>
   
   <Grid container spacing={5} justifyContent={'center'} >

      {selected.map( (item , index) => {

    const {symbol , openPrice  , prevClosePrice , priceChange , count} = item ;
    


    return(
       
      <div className='card-container' key={index}>
        <Card>

          <CardContent>

            <Typography gutterBottom variant='h5'>BitCoin</Typography> 
            <Typography gutterBottom variant='body2' className='name'>name : {symbol}</Typography> 
            <Typography gutterBottom variant='body2' className='name'>name : {nowaData}</Typography> 
            <Typography gutterBottom variant='h5'>Prices</Typography>
            <Typography variant="body2" color="text.secondary">Open price :{openPrice} </Typography>
            <Typography variant="body2" color="text.secondary">Change price : {priceChange} </Typography>
            <Typography variant="body2" color="text.secondary">Close price : {prevClosePrice} </Typography>
            <p>Count : </p>
            <CountUp 
                start={0} 
                end={count}
                duration={2.5}
                separator=' , '>

            </CountUp>

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