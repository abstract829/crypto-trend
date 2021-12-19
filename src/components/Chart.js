import { NavLink, useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { useChart } from "../hooks/useChart";

const Chart = () => {
  const { id } = useParams();
  const { options, data } = useChart({ id })
  return (
    <div>
      <h1 className="mt-4 mb-4 text-3xl font-bold text-center text-white uppercase">
        {id} Chart last month (USD)
      </h1>
      <div className="w-9/12 mx-auto">
        <Line options={options} data={data} />
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/"
          className="px-6 py-2 my-5 text-lg font-semibold text-white uppercase bg-teal-900 rounded-full"
        >
          Back to cryptos
        </NavLink>
      </div>
    </div>
  );
};

export default Chart;
