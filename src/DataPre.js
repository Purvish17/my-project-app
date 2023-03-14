import useAxios from "axios-hooks";
import Table from "react-bootstrap/Table";
// const baseURL =
/*"https://jsonplaceholder.typicode.com/posts";*/

function DataPre() {
  // const [post, setPost] = useState(null);
  // const [error, setError] = useState(null);

  const [{ data, loading, error }, refetch] = useAxios(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  // useEffect(() => {
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
      <button onClick={refetch}>Refetch</button>
      <Table bordered hover responsive="sm">
        <thead>
          <tr>
            <th align="right">Symbol</th>
            <th>Name</th>
            <th>Current Price</th>
            <th>24h </th>
            <th>Market Cap</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((list) => {
            return (
              <tr>
                <td>{list.symbol}</td>
                <td>{list.name}</td>
                <td>{list.current_price}</td>
                <td>{list.price_change_percentage_24h}%</td>
                <td>{list.market_cap}</td>
                <td>{list.total_volume}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default DataPre;
