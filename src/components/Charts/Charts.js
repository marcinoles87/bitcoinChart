import React from 'react'; 
import { useEffect , useState } from 'react' ;
import {Line , Chart , Bar, Doughnut} from 'react-chartjs-2' ;
import {Chart as ChartJS , BarElement , CategoryScale , LinearScale , Tooltip , Legend, ArcElement } from 'chart.js';
import '../Charts/Charts.css';

ChartJS.register(
  BarElement ,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
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
        data :  [dataBitCoin[1]]  ,
        backgroundColor : 'blue' ,
        borderColor : 'black',
        borderWidth : 1,
        hoverOffset: 4
      },

      {
        label : labels[2] ,
        data :  [dataBitCoin[2]],
        backgroundColor : 'red' ,
        borderColor : 'black',
        borderWidth : 1,
        hoverOffset: 4
      } ,

      {
        label : labels[3] ,
        data :  [dataBitCoin[3]],
        backgroundColor : 'green' ,
        borderColor : 'black',
        borderWidth : 1,
        hoverOffset: 4
      },
      {
        label : labels[4] ,
        data :  [dataBitCoin[4]],
        backgroundColor : 'pink' ,
        borderColor : 'black',
        borderWidth : 1,
        hoverOffset: 4
      } ,

      

      
    ]

    
  
  }


 
console.log(datas)

  // Object.assign(datas , {labels})
  // Object.assign(datas , {dataBitCoin}) // dodaje nowa wlasnosc do datas

  datas.datasets.push({dataBitCoin})


  const datas2 = {



    
    labels : [labels[0] , labels[1] , labels[2] , labels[3] , labels[4]] ,
    datasets : [

    
      {
        label : labels ,
        data : [dataBitCoin[0] , dataBitCoin[1] , dataBitCoin[2] , dataBitCoin[3] , dataBitCoin[4]],
        backgroundColor : ['red' , 'blue' ,'green' , 'pink' , 'black'] ,
        borderColor : 'black',
        borderWidth : 1,
        
      }]


  
   }
  

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
        <Doughnut data = {datas2} options={options}  width={300} height={300}></Doughnut>
      </p>
    
      
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