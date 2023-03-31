"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineMobile, AiOutlineClose } from "react-icons/ai";
import { TiMail } from "react-icons/ti";

import Link from "next/link";
import Image from "next/image";
import Login from "./Login";
import Resgister from "./Register";

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
  // const [input, setInput] = useState("");
  interface OpenInterface {
    login: boolean;
    register: boolean;
  }
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [open, setOpen] = useState<OpenInterface>({
    login: false,
    register: false,
  });

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.id as keyof OpenInterface;
    setOpen((prevOpen) => ({
      ...prevOpen,
      [name]: !prevOpen[name],
    }));
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");



  return (
    <>
    <nav className="sticky z-40 w-full top-0 py-2 bg-white ">
      {/* TOP */}
      {isDesktop && (
        <div className="flex top-0 w-full px-4 py-2 items-center justify-between bg-gray-100  border-b-2 border-dashed  border-amber-500">
          <div className=""></div>

          <div className="flex justify-between items-center md:text-xs">
            <span className="mr-6">ALGUNA PREGUNTA? </span>

            <AiOutlineMobile className="fill-current h-4 w-4 flex-shrink-0 mr-2 text-yellow-300" />
            <span className="mr-6">+502 5430-1174 </span>

            <TiMail className="fill-current h-4 w-4 flex-shrink-0 mr-2  text-yellow-300" />
            <span className="mr-6">info@cantajuegaconmigo</span>
          </div>
          <div className="flex items-center justify-end border space-x-4 font-semibold text-lg gap-2 px-6">
            <span className="mr-6 hover:text-[#FFC172] cursor-pointer"
                id="login"
            onClick={handleOpen}
            >
              Iniciar Sesion
            </span>
            <div className="border border-gray-400 h-6 w-0"></div>
            <span className="hover:text-[#FFC172] cursor-pointer"
            id="register"
             onClick={handleOpen}
            >
              Registrarse
            </span>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-2  items-center mx-auto w-full">
        <div className="flex items-center">
          <Image
            src="https://www.cantajuegaconmigo.com/wp-content/uploads/2021/11/NUEVO-LOGO.png"
            alt=""
            width={250}
            height={50}
            className=" gap-6 px-2 py-2 "
          />
        </div>

        {isDesktop ? (
          <div className="flex gap-6 w-auto py-4 px-6">
            <div className="flex justify-between w-full md:gap-6 lg:gap-10 md:text-lg lg:text-2xl font-semibold">
              {items.map((item, index) => (
                <Link href={item.href} className="cursor-pointer" key={index}>
                  <span className="hover:text-orange">{item.name}</span>
                </Link>
              ))}
            </div>
            {/* SEARCH */}
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
    {open.login && <Login handleOpen={handleOpen} />}
    {open.register && <Resgister handleOpen={handleOpen} />}
    {}
    </>
  );
};

export default Navbar;
