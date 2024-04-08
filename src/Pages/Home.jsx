import { Button } from "@material-tailwind/react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="w-full h-[500px] bg-no-repeat bg-center"
      style={{ backgroundImage: `url("./bg_4.png")` }}
    >
      <div className="flex flex-col justify-center mx-auto h-full items-center gap-5">
        <a href="https://www.facebook.com/reel/681457063882085">
        <Button
          className="h-[80px] bg-[#80B500] transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-2 duration-150 rounded-none"
          size="lg"
          >
          <FaPlay className="text-3xl font-bold" />
        </Button>
          </a>
        <p className="text-white font-bold">100% Organic Products</p>
        <h1 className="text-white font-bold text-6xl">
          Nourish Your Inner Radience
        </h1>
        <Link to={"/shop"}>
          <Button
            className="bg-[#80B500] transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-150 rounded-none"
            size="lg"
          >
            Explore Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
