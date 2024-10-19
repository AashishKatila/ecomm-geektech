import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MaleShirt from '../assets/shirt_male.jpg'
import FemaleShirt from '../assets/shirt_female.jpeg'
import Pant from '../assets/pant.jpg'

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Summer Sale Collections",
      description: "Sale! Up to 50% off!",
      img: MaleShirt,
      url: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      id: 2,
      title: "Winter Sale Collections",
      description: "Sale! Up to 50% off!",
      img: FemaleShirt,
      url: "/",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      id: 3,
      title: "Spring Sale Collections",
      description: "Sale! Up to 50% off!",
      img: Pant,
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev !== slides.length - 1 ? prev + 1 : 0));
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [current]);

  return (
    <div className="h-[calc(100vh-80px)] relative overflow-hidden  ">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000 "
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className="flex flex-col md:flex-row items-center w-screen h-full justify-center"
            key={slide.id}
          >
            {/* Content Part  */}
            <div
              className={`h-1/2 ${slide.bg} w-full  md:w-1/2 md:h-full flex flex-col gap-8 justify-center items-center `}
            >
              <div className="text-3xl ">{slide.description}</div>
              <div className="text-5xl font-bold">{slide.title}</div>
              <Link to={slide.url}>
                <button className="bg-black px-4 py-2 text-white rounded-md">
                  Shop Now
                </button>
              </Link>
            </div>
            {/* Image Part  */}
            <div className="h-1/2 w-full md:w-1/2 md:h-full">
              <img src={slide.img} alt={slide.title} className="h-full w-full "  />
            </div>
          </div>
        ))}
      </div>
      {/* Slider  */}
      <div className=" absolute m-auto left-1/2 transform -translate-x-1/2 bottom-8 flex  gap-5">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer bg-black ring-1 ring-offset-2 ring-black  ${
              current === index ? "scale-125" : ""
            } `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

