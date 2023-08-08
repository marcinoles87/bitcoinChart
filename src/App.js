
import './App.css';
import React from 'react';

import Card from './components/Card/Card'
import Charts from './components/Charts/Charts'
import Country from './components/Country/Country'

import { fetchData } from './api/index'
import { useEffect } from 'react';

class App extends React.Component() {

 async componentDidMount(){
    const data = await fetchData()
    console.log(data)
  }

  render(){
  return (
    <div className="container">
      <Card></Card>
      <Charts></Charts>
      <Country></Country>
      
     
    </div>
  );
}
}

export default App;
