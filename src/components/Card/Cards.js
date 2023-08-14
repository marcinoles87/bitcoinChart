import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import  Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';
import { createTheme } from '@mui/material';
import { blueGrey, purple, red } from '@mui/material/colors';
import { dark } from '@mui/material/styles/createPalette';

import cx from 'classnames'
import '../Card/styles.css'



function Cards( { data , select }) {

  // const theme = createTheme({
  //   palette : {
  //     primary : blueGrey,
  //     secondary : purple , 
  //     color : red ,
  //     background : dark ,
  //   }
  // })

 
  if(data.length < 1){
    return('Loading...')
  }

const start = select - 1 ;
const selected = data.slice(start,select)
const d = new Date() ;

const nowaData = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`



  return(
  <div>
   
   <Grid container spacing={5} justifyContent={'center'} className={cx()} >

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
            <Typography variant="theme"color="text.secondary" >Open price :{openPrice} </Typography>
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