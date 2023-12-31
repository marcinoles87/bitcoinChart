
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
  const one = 1 ;
  const two = 2 ;
  const three = 3;
  const four = 4;
  const five = 5;

  

  useEffect( () => {
    fetch('https://data.binance.com/api/v3/ticker/24hr')
    .then( (response) => response.json())
    .then( (result) => {
      
       console.log(result)
       setData(result)}
       
       )

       
      
  
    
    
  }, []) 




 

  
  return (
<>

    <div className="container">
      
      

      <Cards data={data} select={one} ></Cards>
      <Cards data={data} select={two}></Cards>
      <Cards data={data} select={three}></Cards>
      <Cards data={data} select={four}></Cards>
      <Cards data={data} select={five}></Cards>
      
    
    </div>

    
    <div className='charts'>
        <Charts data={data}></Charts>
      </div>

    </>
  );
}

export default App;
