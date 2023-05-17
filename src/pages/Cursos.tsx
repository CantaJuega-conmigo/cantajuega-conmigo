import Image from "next/image"
import image1 from '../../public/img/Untitled_Artwork 5.png'
import image2 from '../../public/img/img-2.png'
import image3 from '../../public/img/Ellipse 13.png'
import image4 from '../../public/img/Rectangle 167.png'
import styles from '../styles/Cursos.module.css'
export default function Cursos(){
    return(
        <div className={`${styles.Container} flex flex-col items-center bg-white`} >
          <section className="h-[10rem] bg-blue relative w-[99%] flex items-center justify-center text-white  2xl:text-2xl  xl:text-6xl lg:text-lg  sm:text-sm ">
             <Image src={image1} alt='' className="absolute w-[auto] bottom-0 left-[25%] h-[10rem] " />
             <Image src={image2} alt=''  className=" w-[auto] absolute bottom-0 right-0  h-[15rem]"/>
           
             <h1 className=" z-50 text-4xl 2xl:text-8xl   xl:text-6xl lg:text-5xl  sm:text-5xl">Cursos</h1>
             <div className="w-56 h-28  absolute right-[32%] top-3">
             <Image src={image4} alt=''  className=" w-[auto] absolute bottom-[2.7rem] right-6  h-[3rem]"/>
             <Image src={image3} alt=''  className=" w-[auto] absolute bottom-[3.2rem] right-[1.2rem]  h-[3.5rem]"/>
             <Image src={image3} alt=''  className=" w-[auto] absolute bottom-4 right-[5rem]  h-[3.5rem]"/>
             </div>
         </section>

         <section className="">
            <div className=" flex justify-center"> 
                <p className={`${styles.Text} text-sm flex w-[80%] 2xl:text-2xl   xl:text-xl lg:text-lg  sm:text-sm`}>
                Nuestra metodología terapéutica es una experiencia única y emocionante que se adapta a las diferentes etapas
                de desarrollo de cada niña y niño. En cada etapa las niñas y niños explorarán canciones infantiles que estimularán 
                su lenguaje y enriquecerán su vocabulario, perfeccionarán su pronunciación y modulación, y tendrán la oportunidad 
                de tener ejemplos de socialización en entornos seguros y acogedores. Además, nuestras actividades artísticas harán 
                que el proceso de aprendizaje sea divertido e integral, 
                convirtiendo en un viaje lleno de emociones y descubrimientos para el crecimiento personal de cada infante.
                </p>
            </div>
         </section>

         <section className={`${styles.CoursesSection}  h-[30rem] w-full flex  justify-center text-sm items-center 
                           2xl:text-2xl   xl:text-xl lg:text-lg  sm:text-sm`
          }>
             <div className=" flex justify-evenly w-9/12  ">

             <div className="flex flex-col justify-between    w-[18rem] h-5/6
                             md:w-[19rem]  
                              xl:w-[20rem]
                             ">
                
                 <section className="flex justify-start h-[5.5rem]">
                    <article className=" bg-orangeicons w-[6rem] h-15 flex justify-center items-center rounded-[10px]">
                        <span>Etapa 1</span>
                    </article>
                    <article className=" bg-[#FFFFFF] flex justify-center items-center w-8/12">
                        <span>0 a 3 meses</span>
                    </article>
                 </section>
                 <section className="flex justify-start h-[5.5rem]">
                    <article className=" bg-green w-[6rem] h-15 flex justify-center items-center rounded-[10px]">
                        <span>Etapa 2</span>
                    </article>
                    <article className=" bg-[#FFFFFF] flex justify-center items-center w-8/12">
                        <span>3 a 6 meses</span>
                    </article>
                 </section>
                 <section className="flex justify-start h-[5.5rem]">
                    <article className=" bg-violet w-[6rem] h-15 flex justify-center items-center rounded-[10px]">
                        <span>Etapa 3</span>
                    </article>
                    <article className=" bg-[#FFFFFF] flex justify-center items-center w-8/12">
                        <span>6 a 9 meses</span>
                    </article>
                 </section>
                 <section className="flex justify-start h-[5.5rem]">
                    <article className=" bg-red w-[6rem] h-15 flex justify-center items-center rounded-[10px]">
                        <span>Etapa 4</span>
                    </article>
                    <article className=" bg-[#FFFFFF] flex justify-center items-center w-8/12">
                        <span>9 a 12 meses</span>
                    </article>
                 </section>
             </div>
             <div className="flex flex-col justify-between w-[18rem] h-5/6
                             md:w-[19rem] 
                             xl:w-[20rem] "
                            >           
                  <section className="flex justify-start h-[5.5rem]">
                    <article className=" bg-orangeicons w-[6rem] h-15 flex justify-center items-center rounded-[10px]">
                        <span>Etapa 5</span>
                    </article>
                    <article className=" bg-[#FFFFFF] flex justify-center items-center w-8/12">
                        <span>1 a 3 años</span>
                    </article>
                 </section>
                 <section className="flex justify-start h-[5.5rem]">
                    <article className=" bg-green w-[6rem] h-15 flex justify-center items-center rounded-[10px]">
                        <span>Etapa 6</span>
                    </article>
                    <article className=" bg-[#FFFFFF] flex justify-center items-center w-8/12">
                        <span>3 a 4 años</span>
                    </article>
                 </section>
                 <section className="flex justify-start h-[5.5rem]">
                    <article className=" bg-violet w-[6rem] h-15 flex justify-center items-center rounded-[10px]">
                        <span>Etapa 7</span>
                    </article>
                    <article className=" bg-[#FFFFFF] flex justify-center items-center w-8/12">
                        <span>4 a 5 años</span>
                    </article>
                 </section>
                 <section className="flex justify-start h-[5.5rem]">
                    <article className=" bg-red w-[6rem] h-15 flex justify-center items-center rounded-[10px]">
                        <span>Etapa 8</span>
                    </article>
                    <article className=" bg-[#FFFFFF] flex justify-center items-center w-8/12">
                        <span>5 a 6 años</span>
                    </article>
                 </section>
             </div>
             </div>
         </section>
        
        </div>
    )
}