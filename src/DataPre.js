import useAxios from "axios-hooks";

import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import Pagination from '@mui/material/Pagination';
// import { Link } from 'react-router-dom'

// const baseURL =
/*"https://jsonplaceholder.typicode.com/posts";*/

function DataPre() {
  


  
  const [{ data, loading, error }, refetch] = useAxios(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const[page,setPage]=useState(1);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

console.log(data);
  const handleSearch = () => {
    return data.filter(
      (coin) =>
        coin?.name.toLowerCase().includes(search) ||
        coin?.symbol.toLowerCase().includes(search)
    );
  };
// useEffect(() => {
//   setInterval(DataPre, 60000);
// }, []);
  return (
    <div className="App">
      <h1>All Cryptocurrencies</h1>
      {/* <Button variant="outline-primary" onClick={refetch}>Refetch</Button> */}
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
     
    <div  style={{
      paddingLeft: '20px',
      paddingRight:'20px',
    }}>
 
   
      <Table  hover responsive="sm"  style={{paddingLeft: "20"}}> 
      
        <thead>
          <tr style={{color:"orange"}}>
            {/* <th align="right">#</th> */}
            <th>Name</th>
            <th>Current Price</th>
            <th>24h </th>
            <th>Market Cap</th>
            <th>Volume</th>
         
          </tr>
        </thead>
        <tbody>
      {data
      
              .slice((page - 1) * 10, (page - 1) * 10 + 10)  
          .filter((val) => {
            return val.name.toLowerCase().includes(search.toLowerCase());
          })
          // .slice((page-1)*10,(page-1)*10+10)
          .map((list) => {
               const profit = list.price_change_percentage_24h > 0;
              
              //  index++;
            return (
                
              <tr>
                {/* <td style={{ width:"5%"}}>{index}</td> */}
                {/* <td  style={{width:"3%"}}></td> */}
             <td key={list.id} onClick={() => navigate(`/coins/${list.id}`)}style={{ width:"20%"}}>{<img src={list.image}  alt="symbol"height="30" />} {list.name}</td>
                {/* onClick={() => navigate(`coindetail`)} */}
                <td  style={{ width:"14%"}}>${list.current_price}</td>
                <td  style={{color:profit>0? "rgb(14,203,129)":"red" }}>{list.price_change_percentage_24h}%</td>
                <td >${list.market_cap}</td>
                <td>${list.total_volume}</td>
            
              </tr>
            );
          })}
        </tbody>
    </Table>
    {/* {<img src='https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'  alt="symbol"height="240" />} */}
<div>
        {/* <Pagination  style={{padding:20, width:"100%",display:"flex", justifyContent:"center"}} count={(data?.length/10).toFixed(0)} onChange={(_,value)=>{setPage(value); window.scroll(0,450)}}  /> */}
         <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
       
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
    </div>
    </div>
    </div>
  );
}


export default DataPre;

