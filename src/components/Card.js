import { NavLink } from "react-router-dom";

const Card = ({ coin }) => {
  return (
    <div className="px-5 py-3 mx-5 my-5 text-white bg-teal-600 rounded shadow-md">
      <div className="flex flex-col items-center justify-center gap-8">
        <img className="mt-4 rounded-full" src={coin.small} />
        <h3 className="my-2 text-2xl font-bold">
          {coin.name} ({coin.symbol})
        </h3>
      </div>
      <div className="flex justify-center">
        <NavLink
          to={`/chart/${coin.id}`}
          className="px-6 py-2 my-5 text-lg font-semibold text-white uppercase bg-teal-700 rounded-full"
        >
          Chart
        </NavLink>
      </div>
    </div>
  );
};
export default Card;
