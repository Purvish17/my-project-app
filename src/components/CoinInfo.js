import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Line } from 'react-chartjs-2';
import moment from "moment";
import axios from 'axios';
import { HistoricalChart } from './api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);




const CoinInfo = () => {
  const {id}= useParams();
  const[coin,setcoin]=useState();
  const [days, setDays] = useState(1);
  const fetchCoin = async ()=>{
    const {data }=await axios.get(HistoricalChart(id));
if(!data){
  return <h1> loading...</h1>
}
const coinData= data.prices.map(value =>({x:value[0], y:value[1].toFixed(2)}));
console.log("d",coinData);
console.log(data);
   setcoin(data.prices);
  }; 
  const options={responsive:true}
  const data1={
    labels: ['10','23'],
    
    datasets:[
      {
    
        fill:true,
        label:id,
        data:['10','15'],
        
      }
    ]
  }
  // console.log("hii", coin.prices);
 
  useEffect( () =>{ fetchCoin();},[]);
  return(
    <>
  data.prices.map(coin)
    <div> hello here i show chart</div>
    <Line options={options} data={data1} />
    </>
  );

}
export default CoinInfo

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { HistoricalChart } from './api';

// const CoinInfo = ({coin}) => {
//   const [historicaldata,setHistoricaldata]= useState();
  
//   const fetchHistoricData = async () => {
//     const { data } = await axios.get(HistoricalChart(coin.id));
//     setHistoricaldata(data.prices);
//   };
//   useEffect(()=>{
//     fetchHistoricData();},[]
//   );

//   return (
//     <div>CoinInfo</div>
//   )
// }



  

