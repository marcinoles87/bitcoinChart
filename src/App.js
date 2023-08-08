
import './App.css';
import axios from 'axios';

import Card from './components/Card/Card'
import Charts from './components/Charts/Charts'
import Country from './components/Country/Country'

import { fetchData } from './api/index'
import { useEffect, useState } from 'react';

function App() {

  const [data , setData ] = useState();

  const url = 	'https://api.publicapis.org/entries';

  useEffect( () => {
    axios.get(`${url}`).then( (response) => {
      setData(response.data.entries);
     
    } )
    
  }, [])

  const { API , Description , link} = data

  console.log(data[0].API)

  const modifiedData = {
    api: data[0].API ,
    description : data[0].Description ,
    link : data[0].link

  }

  
  return (
    <div className="container">
      <Card></Card>
      <Charts></Charts>
      <Country></Country>
     
      
     
    </div>
  );
}

export default App;
