
import './App.css';
import axios from 'axios';

import Cards from './components/Card/Cards'
import Charts from './components/Charts/Charts'
import Country from './components/Country/Country'
import Button from '@mui/material/Button';

import { fetchData } from './api/index'
import { useEffect, useState } from 'react';

function App() {

  const [data , setData ] = useState([]);

  

  useEffect( () => {
    fetch('https://data.binance.com/api/v3/ticker/24hr')
    .then( (response) => response.json())
    .then( (result) => {
      
       console.log(result)
       setData(result)}
       
       )

       
      
  
    
    
  }, []) 




 
console.log(data)
  
  return (


    <div className="container">
      <Cards></Cards>
      <Charts></Charts>
      <Country></Country>
      <Button variant='contained'>Sort </Button>

      {data.map( (item , index) => {
        return(
          <div key={index} className='info-data'>
            <p>Name {item.symbol}  , open price : {item.openPrice} : price change : {item.priceChange} , highest price : {item.highPrice}</p>
          </div>
          
        )
      })}
      
     
    </div>
  );
}

export default App;
