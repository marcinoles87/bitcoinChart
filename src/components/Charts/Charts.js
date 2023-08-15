import React from 'react'; 
import { useEffect , useState } from 'react' ;
import '../Charts/Charts.css'

function Charts({data}) {

  const ranked = data.slice(0,100)

  if(data.length < 2){
    return( 'Ranking is loading ...')
  }

  return (
    <div>Charts
      <p>Rank BitCoin</p>
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