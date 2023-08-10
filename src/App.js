
import './App.css';
import axios from 'axios';

import Cards from './components/Card/Cards'
import Charts from './components/Charts/Charts'
import Country from './components/Country/Country'

import { fetchData } from './api/index'
import { useEffect, useState } from 'react';

function App() {

  const [data , setData ] = useState([]);

  

  useEffect( () => {
    fetch('https://api.publicapis.org/entries?category=cat')
    .then( (response) => response.json())
    .then( (result) => {
      
       setData(result.entries)})
      
  
    
    
  }, []) 




 
console.log(data)
  
  return (


    <div className="container">
      <Cards data={data}></Cards>
      <Charts></Charts>
      <Country></Country>

      {data.map( (item , index) => {
        return(
          <div key={index} className='info-data'>
            <p>Name {item.API}  : desc {item.Description}</p>
          </div>
          
        )
      })}
      
     
    </div>
  );
}

export default App;
