import React from 'react'; 
import { useEffect , useState } from 'react' ;
import {Line , Chart} from 'react-chartjs-2' ;
import '../Charts/Charts.css';

function Charts({data}) {

  const ranked = data.slice(0,100)

  const lineChart = () => {

    <Line
      data = {
        {
          labels : 'Name' ,
          datasets : [{} , {}]
        }
      }
    ></Line>
  }

  if(data.length < 2){
    return( 'Ranking is loading ...')
  }

  return (
    <div>Charts
      <p>Rank BitCoin</p>
      <canvas id="myChart" ></canvas>
      <ul>
      {ranked.map( (item , index) => {

        
        return(
            <li key={index}>Name {item.symbol} , high price : {item.highPrice}</li>
        )
      })}

      

      </ul>
    </div>
  )
}

export default Charts