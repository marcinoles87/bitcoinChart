
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




 

  
  return (


    <div className="container">
      
      <Charts></Charts>
      <Country></Country>
      <Cards data={data}></Cards>
      <Button variant='contained'>Sort </Button>

     
     
    </div>
  );
}

export default App;
