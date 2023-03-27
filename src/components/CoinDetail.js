// import React from 'react' 
// import { useState, useEffect } from 'react'
// import axios from 'axios'

// // import { useParams } from 'react-router-dom'

// const CoinDetail = () => {
  
//   // const params = useParams()
//   const [coin, setCoin] = useState({})
//   const url = `https://api.coingecko.com/api/v3/coins/ethereum`
 
//   useEffect(() => {
//     axios.get(url).then((res) => {
//         setCoin(res.data)
//     }).catch((error) => {
//         console.log(error)
//     })
// },)
//   return (
//     <><div>CoinDetail</div>
//     <h1>{coin.id}</h1>
//    {/* <p> {<img src={coin.image} alt="symbol"height="30" />}</p> */}
//     {/* <h1>{(coin.description.en)}</h1> */}
//   <h1>Rank :{coin.market_cap_rank}</h1>
//    <h1>{coin.current_price}</h1> 
//   {/* <h1> Current price:{coin.market_data.current_price}</h1> */}
//     {/* <h2>{coin.symbol}</h2> */}
//    {/* <h1><img src= {coin.image}  alt="symbol"height="30" /></h1>  */}
//     {/* <h3>{coin.description}</h3> */}
//     </>

//   )
// }

// export default CoinDetail

// import Axios from "axios";
// import React, { useState,useEffect } from "react";




// const baseURL = `https://api.coingecko.com/api/v3/coins/bitcoin`;
// function CoinDetail(){
// const[my_data,SetData]=useState([]);
// useEffect(() => {
//   Axios.get(baseURL).then((response) => {
//       SetData(response.data);
//   })
// },[]);

// return (
// <>
// <h1 responsive="sm"> Coin Details:</h1>
// <h3>{my_data.id}</h3>
// <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="this"/>
// <h4>{my_data.current_price}</h4>

// {/* <div>{my_data.description.en}</div> */}
// </>
// )
// }
// export default CoinDetail
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import axios from 'axios';
import { HistoricalChart, SingleCoin } from './api';

import CoinInfo from './CoinInfo';



const CoinDetail = () => {
  const {id}= useParams();
  const[coin,setcoin]=useState();
  const fetchCoin = async ()=>{
    const {data }=await axios.get(SingleCoin(id));

   setcoin(data);
  }; 
  console.log(coin);
  useEffect( () =>{ fetchCoin();},[]);

  return (
    <>
    <div>
      <h1>CoinDetail</h1>
<img  src={coin?.image.large}
     alt='pghdvgd' 
     height="200"/>
     <h3>Coin Name:{coin?.name}</h3>
     <h1>Rank :{coin?.market_cap_rank}</h1>
     <h2 dangerouslySetInnerHTML={{ __html :coin?.description.en.split(".")[0]}}></h2>
    <h1> {coin?.market_cap}</h1>
    {/* {coin?.description.en.split(".")[0]}. */}
</div> 
<div>
<CoinInfo coin={coin}/>


</div> 
</> 
  )
}

export default CoinDetail

