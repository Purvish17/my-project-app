import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Line } from 'react-chartjs-2';
import moment from 'moment';
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
  // const [days, setDays] = useState(3);
 
  const fetchCoin = async ()=>{
    const {data }=await axios.get(HistoricalChart(id));
if(!data){
  return <h1> loading...</h1>
}
const coinChartData = data.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
    setcoin(coinChartData);
  
  };  
  // console.log("hii",coin);
  const options={responsive:true}
   
  useEffect(() =>{ fetchCoin();},[]);
  const data1={
    // labels: ['10','11','12','13','14','15','17'],
    // labels:coin?.map((coin) => {
    //   let date = new Date(coin[0]);
     
    //   return date.toLocaleDateString();
    // }),
    labels: coin?.map(value => moment(value.x).format(' DD MMM YYYY')),
    datasets:[
      {
        fill: true,
        label: id,
        data: coin?.map(val => val.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
    
        // data:[{prices: coin?.map((value)=> value.y)}],
        
      }
    ]
  }
  // console.log("hii", coin.prices);
 
  useEffect( () =>{ fetchCoin();},[]);
  return(
    <>
  {/* {data.price.map(coin)} */}
    {/* <div> hello here i show chart</div> */}
    <Line 
    responsive="sm" style={{
      paddingLeft:  '20px',
      paddingRight:'20px',
      paddingBottom:'20px'
    }}options={options} data={data1} />
    </>
  );

}
export default CoinInfo





  

