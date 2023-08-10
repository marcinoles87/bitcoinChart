import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Cards( {data}) {

const selected = data.slice(0,10)

  return(
  <div>
   
  {selected.map( (item , index) => {
    console.log(selected)
    return(
       <Card>
      <div className='card-container' key={index}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <p>Name : {item.symbol} price change : {item.priceChange}</p>
          </Typography>
           
        </CardContent>
       
        </div>
        </Card>
    )
  })}
  
   </div>

  )
  
}

export default Cards