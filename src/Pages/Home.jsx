import { Button } from "@material-tailwind/react";
import { FaPlay } from "react-icons/fa";
const Home = () => {
  return (
    <div
      className="w-full h-[500px] bg-no-repeat bg-center"
      style={{ backgroundImage: `url("./bg_4.png")` }}
    >
      <div className="flex flex-col justify-center mx-auto h-full items-center gap-5">
      <Button className="bg-[#80B500]" size="lg">
      <FaPlay className="text-3xl font-bold"/>
      </Button>
      <p className="text-white">100% Organic Products</p>
      <h1 className="text-white font-bold text-6xl">Nourish Your Inner Radience</h1>
      <Button className="bg-[#80B500]" size="lg">
        Explore Products
      </Button>
      </div>
    </div>
  );
};

export default Home;
