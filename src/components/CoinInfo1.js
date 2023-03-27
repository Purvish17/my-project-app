// import React from 'react'

// const CoinInfo1 = () => {
//   return (
//     <div>CoinInfo1</div>
//   )
// }

// export default CoinInfo1
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { Line } from 'react-chartjs-2';

// import axios from 'axios';
// import { HistoricalChart1 } from './api';



// const CoinInfo1 = () => {
//   const {id}= useParams();
//   const[coin,setcoin]=useState();
//   const [days, setDays] = useState(1);
//   const fetchCoin = async ()=>{
//     const {data }=await axios.get(HistoricalChart1(id,days));

//    setcoin(data.prices);
//   }; 
// //  console.log("data",coine);
// // console.log("data1",coin);
// //  const coinChartData = data.map(value => ({ x: value[0], y: value[1]}));
// // console.log("data",coinChartData)
//   useEffect( () =>{ fetchCoin();},[]);
//   return(
//     <>
//     <div> hello here i show chart</div>
//     const data1={
//     labels: ['10','23'],
    
//     datasets:[
//       {
    
//         fill:true,
//         label:id,
//         data:['10','15'],
        
//       }
//     ]
//   }
//     {/* <Line
//               data={{
//                 labels: coin.prices.map((coin) => {
//                   let date = new Date(coin[0]);
//                   let time =
//                     date.getHours() > 12
//                       ? `${date.getHours() - 12}:${date.getMinutes()} PM`
//                       : `${date.getHours()}:${date.getMinutes()} AM`;
//                   return days === 1 ? time : date.toLocaleDateString();
//                 }),

//             //     datasets: [
//             //       {
//             //         data: coin.map((coin) => coin[1]),
//             //         label: `Price ( Past ${days} Days ) in usd`,
//             //         borderColor: "#EEBC1D",
//             //       },
//             //     ],
//             //   }}
//             //   options={{
//             //     elements: {
//             //       point: {
//             //         radius: 1,
//             //       },
//             //     },
//               }} */}
//             {/* /> */}
 
//     </>
//   );

// }
// export default CoinInfo1