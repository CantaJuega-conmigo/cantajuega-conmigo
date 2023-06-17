import Image from "next/image";
import { BsArrowLeft} from "react-icons/bs";
import image1 from '../../public/img/image 12.png'
import image2 from '../../public/img/Star 9.png'
import image3 from '../../public/img/Untitled_Artwork-3-1.png'
import styles from '../styles/Cancionero.module.css'
import {  useState } from "react";
import { IoMdDownload } from "react-icons/io";
import MusicsPlayers from "@/components/MusicsPlayers/MusicsPlayers";


export default function Cancionero(){
    const [login,setLogin]= useState<boolean>(false)

    const loginfalso=()=>setLogin(!login)

    const fakeaudios=[
        {cancion:'1',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684967568/Wiz_Khalifa_Black_And_Yellow_GMix_ft_Snoop_Dogg_Juicy_J_TPain_ocicnm.mp3'},
        {cancion:'2',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982450/Drake_GODS_PLAN_rekoav.mp3'},
        {cancion:'3',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982471/Eminem_Lose_Yourself_jvueah.mp3'},
        {cancion:'4',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982550/Foster_The_People_Pumped_Up_Kicks_tcdrup.mp3'},
        {cancion:'5',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982590/Jack_Stauber_Buttercup_ndqobo.mp3'},
        {cancion:'6',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982550/Foster_The_People_Pumped_Up_Kicks_tcdrup.mp3'},
        {cancion:'7',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982590/Jack_Stauber_Buttercup_ndqobo.mp3'},
        {cancion:'8',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982550/Foster_The_People_Pumped_Up_Kicks_tcdrup.mp3'},
        {cancion:'9',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982590/Jack_Stauber_Buttercup_ndqobo.mp3'}
    ]

    return (
        <div className={`  bg-white ${styles.Container}`} >
          
            <main className=" relative bg-violet h-[10rem] w-full flex justify-center items-center ">
                <Image src={image1} alt="blueimage" className={`${styles.Image1}`}/>
                 <div className={`${styles.StarsContainer}`}>
                <Image className={`${styles.Star1}`} src={image2} alt="stars"/>
                <Image className={`${styles.Star2}`} src={image2} alt="stars"/>
                <Image className={`${styles.Star3}`} src={image2} alt="stars"/>
                 </div>
                <h1 className="  z-30 text-[#FFFFFF] text-4xl 2xl:text-8xl   xl:text-6xl lg:text-5xl  sm:text-5xl">Cancionero</h1>
            </main>
          
            <div className={`${login?'flex flex-col items-center sm:items-stretch sm:flex-row ':
            `${styles.SecondContainer} relative
                 min-[420px]:h-[34rem] sm:landscape:h-[40rem] sm:h-[33rem] md:h-[36rem] lg:h-[34rem] 
             xl:h-[35rem] 2xl:h-[45rem] min-[2000px]:h-[50rem] ` }`}>

                { login&&
              <section className=" w-full sm:w-6/12 ">
                  <MusicsPlayers Musics={fakeaudios}/>
              </section>}

             <section className={`${login?` flex flex-col w-full sm:w-6/12 `:
             `  h-full flex items-center relative p-1 `}`}>
           
             
                 <article className={`${login?` text-center h-3/6 flex justify-center items-center`:
                 `  flex items-center justify-center
                      h-auto
                     md:w-[55%] md:ml-2
                     lg:w-[56%] lg:ml-0
                     xl:w-[56%]
                     2xl:ml-2 2xl:w-7/12 ` }`}>

                   <p className={`${login?`flex `:
                   `  text-center 
                    w-full p-4 text-base
                     min-[300px]:p-8 min-[300px]:text-lg
                    sm:p-0 sm:w-7/12 sm:text-xl sm:leading-8
                    md:w-full
                   
                    lg:text-lg
                    xl:w-full xl:text-xl xl:leading-9
                    2xl:w-full  2xl:text-2xl 2xl:leading-10`}`}>
                    Nuestro cancionero es una colección de canciones únicas y originales creadas por nuestro 
                    talentoso equipo de cantantes y nuestro productor musical. Cada letra y melodía ha sido escrita 
                    específicamente para adaptarse a la etapa de desarrollo en la que se encuentran las niñas y niños,
                    lo que las hace hermosas, divertidas y sobre todo educativas. Nos enorgullece decir que nuestras canciones
                    están llenas de amor y pasión por lo que hacemos, y esperamos que puedan disfrutarlas tanto como 
                    nosotros disfrutamos en su creación.
                   </p>
                 </article>

                 <Image src={image3} alt="bg-cj" className={`${login?`w-6/12 h-auto  m-auto`:
                 `  absolute right-0 h-3/6 w-auto  hidden
                  
                   md:w-[43%] md:h-auto  md:block
                   min-[940px]:top-[18%]  min-[940px]:right-[5%] min-[940px]:w-[38%] min-[940px]:h-auto
                  lg:top-[18%]   lg:right-[5%] lg:h-[65%] lg:w-auto lg:max-h-[25rem]
                  xl:top-[15%]  xl:right-[5%]  xl:h-[70%] xl:max-h-[32rem]
                  2xl:top-[10%] 2xl:right-[5%]  2xl:h-[80%] 2xl:max-h-[36rem]
                   min-[2000px]:max-h-[48rem] `}`} />
                   
                   {login&&
                 <button className="flex items-center justify-center border-[2px] m-auto bg-[#FFFFFF] border-orangeicons w-5/6 min-w-[15rem] max-w-[18rem]  rounded-lg p-2 ">
                    <span className=" w-8/12">Descargar cancionero</span>
                    <span className=" text-black  w-1/12"> <IoMdDownload className=" text-2xl" /> </span>
                 </button>
                 }
              
             </section>

                  {!login&&
                 <article className={`${login?``:
                 `  min-[500px]:absolute bottom-[0%]  w-full flex justify-center  text-white`}`}>
                   <button className="flex items-center justify-center bg-blue w-[20rem] rounded-full text-[#FFFFFF]">
                        <span className=" text-orangeicons w-1/12"><BsArrowLeft/> </span>
                        <span className=" w-10/12">Inscríbete para acceder a nuestro contenido</span>
                   </button>
                 </article>
                    }
          </div>
          <button onClick={loginfalso}>Vista de logueado</button>
        </div>
    )
}