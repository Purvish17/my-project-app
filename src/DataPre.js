import useAxios from "axios-hooks";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
// const baseURL =
/*"https://jsonplaceholder.typicode.com/posts";*/

function DataPre() {
  // const [post, setPost] = useState(null);
  // const [error, setError] = useState(null);

  const [{ data, loading, error }, refetch] = useAxios(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
//  setInterval(refetch,90000);
  
  // // useEffect(() => {
  //   axios
  //     .get(baseURL)
  //     .then((response) => {
  //       setPost(response.data);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, []);

  // const createPost = () => {
  //   axios
  //     .post(baseURL, {
  //       title: "Hola, Senorita!",
  //       body: "Esta es una nueva publicación.",
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // };

  // const updatePost = () => {
  //   axios
  //     .put(baseURL, {
  //       title: "Hello, BROO!",
  //       body: "This is an updated post.",
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // };

  // const deletePost = () => {
  //   axios.delete(`${baseURL}/1`).then(() => {
  //     alert("Post deleted!");
  //     setPost(null);
  //   });
  // };

  // let data = [...post];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // if (!post) return "No post!";

  console.log(
    "Data :",
    data.map((data) => {
      return data;
    })
  );
  return (
    <div>
      <Button variant="outline-primary" onClick={refetch}>Refetch</Button>
      <Table  hover responsive="sm" > 
      
        <thead>
          <tr style={{color:"orange"}}>
            <th align="right">#</th>
            <th>Name</th>
            <th>Current Price</th>
            <th>24h </th>
            <th>Market Cap</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((list,index =0) => {
               const profit = list.price_change_percentage_24h > 0;
               index++;
            return (
              <tr>
                <td style={{ width:"5%"}}>{index}</td>
                {/* <td  style={{width:"3%"}}></td> */}
                <td style={{ width:"20%"}}>{<img src={list.image}  alt="symbol"height="30" />} {list.name}</td>
                <td style={{ width:"14%"}}>${list.current_price}</td>
                <td style={{color:profit>0? "rgb(14,203,129)":"red" }}>{list.price_change_percentage_24h}%</td>
                <td>${list.market_cap}</td>
                <td>${list.total_volume}</td>
              </tr>
            );
          })}
        </tbody>
    </Table>
    </div>
  );
}

export default DataPre;

