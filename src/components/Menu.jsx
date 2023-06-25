import React from "react";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";
import Image7 from "../assets/image7.png";

const Menu = () => {
  return (
    <div>
      {/* Our Menu */}
      <div className="px-8 py-2 bg-[#149F39] w-fit mx-auto mt-16">
        <div className="text-gray-50 text-2xl">Our Menu</div>
      </div>

      <div className="text-4xl font-normal text-center mt-6">
        Explore Our Menu
      </div>

      {/* Images */}
      <div className="grid gap-4 grid-rows-3 grid-cols-4 mt-10 mx-20">
        <img className="col-span-2 row-span-2 h-full w-full" src={Image1} />
        <img className="col-span-1 row-span-2 h-full w-full " src={Image2} />
        <img className="col-span-1 row-span-1 h-full w-full " src={Image3} />
        <img className="col-span-1 row-span-2 h-full w-full " src={Image7} />
        <img className="col-span-1 row-span-1 h-full w-full " src={Image4} />
        <img className="col-span-1 row-span-1 h-full w-full " src={Image5} />
        <img className="col-span-1 row-span-1 h-full w-full " src={Image6} />
      </div>
    </div>
  );
};

export default Menu;
