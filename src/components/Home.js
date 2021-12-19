import { useCoins } from "../hooks/useCoins";
import Card from "./Card";

const Home = () => {
  const { coins } = useCoins();
  return (
    <div className="lg:px-24 2xl:px-48 mt-14">
      <div className="flex flex-col items-center justify-center my-5 text-white">
        <h1 className="mb-2 text-4xl font-bold text-center uppercase">
          Day trending cryptos
        </h1>
        <p className="mb-4 font-semibold">(most searched)</p>
        <h3 className="text-xl font-medium"></h3>
      </div>
      <div className="grid md:grid-cols-3">
        {coins && coins.map(({ item }) => <Card key={item.id} coin={item} />)}
      </div>
    </div>
  );
};

export default Home;
