import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
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
import { Line } from 'react-chartjs-2';
import { HistoricalChart } from "./api";


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


const CoinInfo1 = () => {
  const { id } = useParams();
  const { response } = useAxios(HistoricalChart(id));
  
  if(!response) {
    return (
      <>
      <h1>Loading..........</h1>
      </>
    )
  }
  const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(3)}));
  console.log(coinChartData);
  const options = {
    responsive: true
  }
  const data = {
    // labels: coinChartData.map(value => ),
    labels: response.map((coin) => {
        let date = new Date(coin[0]);
       
        return date.toLocaleDateString();
      }),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData.map(val => val.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }

  return (
    <div>
      <Line options={options} data={data} />

    </div>
  )
}

export default CoinInfo1;