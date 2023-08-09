
import './App.css';
import axios from 'axios';

import Card from './components/Card/Card'
import Charts from './components/Charts/Charts'
import Country from './components/Country/Country'

import { fetchData } from './api/index'
import { useEffect, useState } from 'react';

function App() {

  const [data , setData ] = useState();

  

  useEffect( () => {
    fetch('https://api.publicapis.org/entries?category=cat').then( (response) => {
    setData(response.entries)
  console.log(response)
    
    
  }, []) } )


console.log(data)
 

  
  return (
    <div className="container">
      <Card></Card>
      <Charts></Charts>
      <Country></Country>
      {/* {data.map( (item) => {
        return(
          <div>
            <p>{item}</p>
          </div>
          
        )
      })} */}
      
     
    </div>
  );
}

export default App;
