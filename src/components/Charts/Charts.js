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

  const ranked = data.slice(0,10) ;
  const options = {

  }
  
  useEffect( () => {
    setDailydata(ranked)
  },[])

  const labels = ranked.map((item) => item.symbol)
  const dataBitCoin = ranked.map((item) => item.highPrice)
  
  
 console.log(dataBitCoin)
  
  const datas = {


    
    labels : [ranked.map( (item) => item.symbol)] ,
    datasets : [

      
      {
        label : labels.map( (item) => item.symbol) ,
        data : [dataBitCoin[0] , dataBitCoin[1] ,2],
        backgroundColor : 'black' ,
        borderColor : 'black',
        borderWidth : 1,
      },

      {
        label : 'blue' ,
        data : [3 , 3,6] ,
        backgroundColor : 'blue' ,
        borderColor : 'black',
        borderWidth : 1,
      },

      {
        label : '369' ,
        data : [5,4,5 ],
        backgroundColor : 'red' ,
        borderColor : 'black',
        borderWidth : 1,
      }

      
    ]

    
  
  }



  Object.assign(datas , {labels})
  Object.assign(datas , {dataBitCoin})

  datas.datasets.push({dataBitCoin})


  
  

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