"use client";

import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineMobile, AiOutlineClose } from "react-icons/ai";
import { TiMail } from "react-icons/ti";

import Link from "next/link";
import Image from "next/image";

const items = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Metodología", href: "/metodologia" },
  { name: "Cancionero", href: "/cancionero" },
  { name: "Membresías", href: "/membresias" },
  { name: "Cursos", href: "/cursos" },
  { name: "Contacto", href: "/contacto" },
];



// MOVER A OTRO LADO
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const Navbar = () => {
  const [input, setInput] = useState("");

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <nav className="z-40 w-full top-0 py-6 ">
      {/* TOP */}
      {isDesktop && (
        <div className="flex fixed  top-0 w-full px-4 py-2 items-center justify-between bg-gray-100  border-b-2 border-dashed  border-amber-500">
          <div className=""></div>

          <div className="flex justify-between items-center">
            <a href="#" className="mr-6">
              ALGUNA PREGUNTA?{" "}
            </a>

            <AiOutlineMobile className="fill-current h-4 w-4 flex-shrink-0 mr-2 text-yellow-300" />
            <a href="#" className="mr-6">
              +502 5430-1174{" "}
            </a>

            <TiMail className="fill-current h-4 w-4 flex-shrink-0 mr-2  text-yellow-300" />
            <a href="#" className="mr-6">
              info@cantajuegaconmigo
            </a>
          </div>
          <div className="flex items-center justify-end border space-x-4 font-semibold text-lg gap-2 px-6">
            <a href="#" className="mr-6">
              Iniciar Sesion
            </a>
            <div className="border border-gray-400 h-6 w-0"></div>
            <a href="#" className="">
              Registrarse
            </a>
          </div>
        </div>
      )}


      <div className="flex justify-between mt-4  items-center mx-auto w-full">
        <div className="flex items-center">
          <Image
            src="https://www.cantajuegaconmigo.com/wp-content/uploads/2021/11/NUEVO-LOGO.png"
            alt=""
            width={250}
            height={50}
            className=" gap-6 px-6 py-6 "
          />
        </div>

        {isDesktop ? (
          <div className="flex gap-6 w-auto py-4 px-6">
            <div className="flex justify-between w-full md:gap-6 lg:gap-10 md:text-lg lg:text-2xl font-semibold">
              {items.map((item, index) => (
                <Link
                  href={item.href}
                  className="cursor-pointer"
                  key={index}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            {/* SEARCH */}
            <div className="flex w-auto h-[30px] md:w-[300px] md:h-auto ml-4">
              <input
                placeholder="Search"
                className="w-full border-none px-4 py-2 text-zinc-500 bg-teal-100 border-[1px] border-zinc-700 placeholder:text-zinc-400  rounded-tl-lg rounded-bl-lg focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="bg-teal-500 px-5 py-3 rounded-tr-lg rounded-br-lg cursor-pointer text-white ">
                <BiSearch size={20} />
              </div>
            </div>
          </div>
        ) : (
          <button
            className="rounded-full p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <HiOutlineMenu size={40} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-cyan-500 w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-6 text-[#111a44]">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <AiOutlineClose size={40} />
              </button>
            </div>
            {items.map((item, index) => (
              <div
                className="flex flex-col gap-10 p-4 ml-[15%] text-2xl text-[#111a44]"
                key={index}
              >
                <Link href={item.href}>{item.name}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

