import {useState, useEffect} from 'react'
import { parseDataChart, getCoinsDataChart } from '../services/coins';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "black",
        },
      },
      y: {
        ticks: {
          color: "black",
        },
      },
    },
    plugins: {
      legend:{
        display: false
      }
    },
  };
export const useChart = ({id}) => {
  const [prices, setPrices] = useState([]);
  const [days, setDays] = useState([]);
  
  useEffect(() => {
    const fetchData = async() =>{
      const data = await getCoinsDataChart(id)
      const dataChart = parseDataChart(data)
      setPrices(dataChart.prices)
      setDays(dataChart.days)
    }  
    fetchData()
  }, [id])

  const data = {
    labels: days,
    datasets: [
      {
        data: prices,
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  return{
      options, data
  }
};
