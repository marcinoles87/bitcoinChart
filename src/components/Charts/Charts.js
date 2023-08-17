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

  const ranked = data.slice(0,5) ;
  const options = {

  }
  
  useEffect( () => {
    setDailydata(ranked)
  },[])

  const labels = ranked.map((item) => item.symbol)
  const dataBitCoin = ranked.map((item) => (item.highPrice)*10)
  
  
 console.log(dataBitCoin)
  
  const datas = {


    
    labels : [ranked.map( (item) => item.symbol)] ,
    datasets : [

      
      {
        label : labels[0] ,
        data : [dataBitCoin[0]],
        backgroundColor : 'black' ,
        borderColor : 'black',
        borderWidth : 1,
      },

      {
        label : labels[1] ,
        data :  [dataBitCoin[1]] ,
        backgroundColor : 'blue' ,
        borderColor : 'black',
        borderWidth : 1,
      },

      {
        label : labels[2] ,
        data :  [dataBitCoin[2]],
        backgroundColor : 'red' ,
        borderColor : 'black',
        borderWidth : 1,
      } ,

      {
        label : labels[3] ,
        data :  [dataBitCoin[3]],
        backgroundColor : 'green' ,
        borderColor : 'black',
        borderWidth : 1,
      },
      {
        label : labels[4] ,
        data :  [dataBitCoin[4]],
        backgroundColor : 'pink' ,
        borderColor : 'black',
        borderWidth : 1,
      }

      
    ]

    
  
  }


 
console.log(datas)

  // Object.assign(datas , {labels})
  // Object.assign(datas , {dataBitCoin}) // dodaje nowa wlasnosc do datas

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
      <p>Rank the Highest Price BitCoin
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