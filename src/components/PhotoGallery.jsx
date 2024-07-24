import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import ImageCard from "./ImageCard";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>

      {/* All my photos will be listed inside this div */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">
        {/* Image Card */}
        <ImageCard 
        title="The Beach"
        author="Coder786"
        img="https://images.pexels.com/photos/3238764/pexels-photo-3238764.jpeg"
        price={10}
        icon1={
          <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        icon2={
          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        />
        <ImageCard 
        title="The Beach"
        author="Coder786"
        img="https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=600"
        price={10}
        icon1={
          <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        icon2={
          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        />
        <ImageCard 
        title="The Beach"
        author="Coder786"
        img="https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&w=600"
        price={10}
        icon1={
          <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        icon2={
          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        />
        <ImageCard 
        title="The Beach"
        author="Coder786"
        img="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=600"
        price={10}
        icon1={
          <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        icon2={
          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        />
        <ImageCard 
        title="The Beach"
        author="Coder786"
        img="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"
        price={10}
        icon1={
          <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        icon2={
          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        />
        <ImageCard 
        title="The Beach"
        author="Coder786"
        img="https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        price={10}
        icon1={
          <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        icon2={
          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        />

      </div>
    </div>
  );
};

export default PhotoGallery;
