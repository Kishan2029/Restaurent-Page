import React from "react";
import Food from "../assets/Food.svg";
import { data } from "../Data/data1";

function Section() {
  return (
    <div>
      {/* Food and Explore Now Section */}
      <div className="flex space-x-24 mt-12 mx-8">
        <div>
          <img className="ml-8 h-108 w-108" src={Food} />
        </div>
        <div className="flex flex-col m-auto">
          <div className="px-8 py-2 bg-[#149F39] w-fit">
            <div className="text-gray-50 font-normal text-sm">
              50% OFF ALL Products
            </div>
          </div>
          <div className="text-7xl font-medium mt-8">
            Enjoy Your
            <br /> Delicious Food
          </div>
          <div className="text-sm mt-8 w-fit w-4/6 font-medium">
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a.
          </div>
          <div className="px-6 py-4 mt-10 bg-[#FFC066] w-fit">
            <div className="text-2xl text-gray-50 font-medium">Explore Now</div>
          </div>
        </div>
      </div>
      {/* 3 icons */}

      <div className="flex justify-around mx-44 mt-16">
        {data.map((item) => {
          return (
            <div className="flex space-x-3" key={item.title}>
              <img width={60} height={60} src={item.icon} />
              <div className="">
                <div className="font-semibold text-lg">{item.title}</div>
                <div className="font-light text-sm w-48">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <hr className="mt-10" />
    </div>
  );
}

export default Section;
