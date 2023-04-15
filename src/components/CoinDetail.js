
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import axios from 'axios';
import { SingleCoin } from './api';

import CoinInfo from './CoinInfo';


// import CoinInfo1 from './CoinInfo1';

const CoinDetail = () => {
  const {id}= useParams();
  const[coin,setcoin]=useState();
  const fetchCoin = async ()=>{
    const {data }=await axios.get(SingleCoin(id));

   setcoin(data);
  }; 
  console.log("data2",coin);
  useEffect( () =>{ fetchCoin();},[]);
// useEffect(()=>{
// axios.get(SingleCoin(id))
// .then((res)=>
// console.log("hiii",res)
// // );
// const profit1= coin?.market_cap_change_percentage_24h_in_currency>0;


if(!coin) return <h1> loading..</h1>
  return (
    <>
    <div
       style={{
        paddingLeft: '10px',
        paddingRight:'10px',
      }}>
      <h1 className="text-center" >CoinDetail</h1>
<img  src={coin?.image.large}
     alt='pghdvgd' 
     height="200"/>
          <h6>{coin?.symbol}</h6>
     <h3>{coin?.name}</h3>

     <h1>Rank :{coin?.market_cap_rank}</h1>
    <h1 > Price:${coin?.market_data.current_price.usd}</h1>
    <h1 >Market cap:${coin?.market_data.market_cap.usd}</h1>
     <h6  responsive="sm"dangerouslySetInnerHTML={{ __html :coin?.description.en}}></h6>
    <h1> {coin?.market_cap}</h1>
    {/* {coin?.market_data.current_price.usd} */}
    
    {/* {coin?.market_data.current_price} */}
    {/* {coin?.description.en.split(".")[0]}. */}
</div> 
<div>
<CoinInfo coin={coin}/> 
{/* <CoinInfo1  coin={coin}/> */}


</div> 
</> 
  )
}

export default CoinDetail

