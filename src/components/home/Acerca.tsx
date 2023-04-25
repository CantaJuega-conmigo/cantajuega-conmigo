import React from 'react'
import { motion } from "framer-motion"



// interface Animations {
//   staggerContainer: object;
//   fadeIn: object;
//   planetVariants: object;
//   textContainer: object;
//   textVariant2: object;
// }

interface TypeText {
  title?: string | any;
  text?: string;
  number?: number;

}



const Acerca = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 bg-slate-100">
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

        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div initial={{
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
          className='flex-1 flex justify-center items-center'
        >
          <img src="https://www.cantajuegaconmigo.com/wp-content/uploads/2022/02/Untitled_Artwork-3-1.png" alt="CJ" className='w-[90%] object-contain' />
        </motion.div>
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
          className='flex-[0.75] flex justify-center flex-col'
        >
          <TypingText title="| ¿Como Funciona?" />
          <TitleText title={<>Metodologia</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={index + 1}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export const TypingText: React.FC<TypeText> = ({ title }) => (
  <motion.p
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


    className={`font-normal text-[14px] text-secondary-white`}
  >
    {Array.from(title).map((letter: any, index) => (
      <motion.span initial={{
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
        key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

const TitleText: React.FC<TypeText> = ({ title, }) => (
  <motion.h2
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
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-yellow-500`}
  >
    {title}
  </motion.h2>
);




const startingFeatures = [
  'Cantando y jugando',
  'Etapas de desarrollo',
  'Aprendizaje integral',
];



const StartSteps: React.FC<TypeText> = ({ number, text }) => (
  <div className="flex justify-center items-center flex-row">
    <div
      className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#26798E]"
    >
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);








export default Acerca;