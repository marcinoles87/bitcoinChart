import React from 'react'; 
import { useEffect , useState } from 'react' ;
import {Line , Chart , Bar} from 'react-chartjs-2' ;
import {Chart as ChartJS , BarElement , CategoryScale , LinearScale , Tooltip , Legend } from 'chart.js';
import '../Charts/Charts.css';

ChartJS.register(
  BarElement ,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
)

function Charts({data}) {

  const [dailyData , setDailydata] = useState({});

  const ranked = data.slice(0,100) ;
  const options = {

  }
  
  useEffect( () => {
    setDailydata(ranked)
  },[])

  const labels = ranked.map((item) => item.symbol)
  
  
 
  
  const datas = {
    
    labels : [ranked.map( (item) => item.symbol)] ,
    datasets : [

      
      {
        label : '369' ,
        data : [3,5,6] ,
        backgroundColor : 'black' ,
        borderColor : 'black',
        borderWidth : 1,
      },

      {
        label : '369' ,
        data : [3,5,9] ,
        backgroundColor : 'blue' ,
        borderColor : 'black',
        borderWidth : 1,
      },

      {
        label : '369' ,
        data : [3,5,6] ,
        backgroundColor : 'red' ,
        borderColor : 'black',
        borderWidth : 1,
      }
    ]

    
  
  }

  console.log(datas)

  Object.assign(datas , labels)

  
  
  console.log(dailyData)
  // const lineChart = (
  //   dailyData[0] ?
  //   <Line

    
  //     data = {
  //       {
  //         labels : 'Name' ,
  //         datasets : [{} , {}]
  //       }
  //     }
  //   ></Line>  : null
  // )

 

  if(data.length < 2){
    return( 'Ranking is loading ...')
  }

  return (
    <div>Charts
      <p>Rank BitCoin
        <Bar data = {datas} options={options}></Bar>
      </p>
    
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