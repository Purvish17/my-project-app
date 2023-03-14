import Table from "react-bootstrap/Table";

function BasicExample() {
  // const [{ data, loading, error }, refetch] = useAxios(
  //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  // );

  // if (loading) return <p>Loading...</p>;

  // if (error) return <p>Error: {error.message}</p>;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>1h</th>
          <th>7d</th>
          <th>Mkt Cap</th>
          <th>Last 7 days</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bitcoin</td>
          <td>$21,746.22</td>
          <td>0.0%</td>
          <td>-8.0%</td>
          <td>$419,970,742,294 </td>
          <td>graph</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ethereum</td>
          <td>$1569.0</td>
          <td>0.1%</td>
          <td>5.0%</td>
          <td>$742,294 </td>
          <td>Graph </td>
        </tr>
        <tr>
          <td>3</td>
          <td>BNB</td>
          <td>$15</td>
          <td>0.5%</td>
          <td>-9.0%</td>
          <td>$390.0</td>
          <td>Graph </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;
