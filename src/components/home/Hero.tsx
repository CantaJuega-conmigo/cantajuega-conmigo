"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";
Image;

const Hero = () => {
  const slides = [
    {
      title: "Jugando",
      text: "Entendemos la importancia del juego para desarrollar habilidades",
      // url: "https://www.cantajuegaconmigo.com/wp-content/uploads/2022/02/Untitled_Artwork-4-6.png",
    },
    {
      title: "Cantando",
      text: "Utilizando la musica como motor",
      url: "https://www.cantajuegaconmigo.com/wp-content/uploads/2022/02/Untitled_Artwork-3-1.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section className="h-[80vh] w-full mb-8 xl:mb-24 bg-gradient-to-r from-[#6EC1E4] via-[#73ddeb] to-[#61CE70]  overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center py-10">
        <div className="lg:ml-8 xl:ml-[135px] flex  items-center lg:items-center text-center lg:text-left justify-center flex-1 px-4 lg:px-0 text-white">
          <button
            className=" group-hover:block absolute  -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={prevSlide}
          >
            <BsChevronCompactLeft size={30} />
          </button>
          {/* Right Arrow */}
          <button
            className=" group-hover:block absolute  -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={nextSlide}
          >
            <BsChevronCompactRight size={30} />
          </button>
          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="text-center pb-6"
          >
            <h4 className="font-base leading-none text-4xl">Aprendiendo</h4>
            <h4 className="font-bold text-8xl">{slides[currentIndex].title}</h4>
            <p className="max-w-[480px] mb-8 py-4">
              {slides[currentIndex].text}
            </p>
          </motion.div>
        </div>

        {/* Image */}

        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          className="flex-1 lg:flex md:justify-end md:items-end flex-col lg:items-center lg:justify-between"
        >
          <Image
            src={"https://www.cantajuegaconmigo.com/wp-content/uploads/2022/02/Untitled_Artwork-4-6.png"}
            alt=""
            height={600}
            width={600}
            className="w-auto h-auto object-scale-down"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
