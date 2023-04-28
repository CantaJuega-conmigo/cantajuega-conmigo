import React from "react";
import { motion } from "framer-motion";

const metodologies = [
  {
    text: "La Neuroeducación se enfoca en crear un ambiente seguro y estimulante para el aprendizaje, en donde las niñas y los niños son los protagonistas y van aprendiendo a través de la experiencia, de forma multisensorial, involucrando las emociones y fomentando la creatividad.",
    title: "Neuroeducación",
  },
  {
    text: "El arte fomenta la creatividad, mejora las habilidades motoras y la coordinación, desarrolla el lenguaje y la comunicación, promueve la empatía y la comprensión, y mejora la autoestima y la confianza. Por lo tanto, utilizamos el arte para que los niños sientan motivados a seguir aprendiendo.",
    title: "Música y arte",
  },
  {
    text: "El modelado de video puede ser una técnica efectiva de intervención para niñas y niños con diagnósticos como el autismo y dificultades en el desarrollo de lenguaje. Puede aumentar la motivación y la atención, mejorar la comprensión y el aprendizaje, facilitar la imitación y la práctica, favorecer la generalización de habilidades y puede ser utilizado en terapias individuales y grupales. Por lo tanto, utilizamos el modelado de video como una herramienta efectiva para recuperar habilidades lingüísticas y motoras en niñas y niños con diagnósticos específicos.",
    title: "Video Modeling",
  },
];

const Metodologias = () => {
  const [animationComplete, setAnimationComplete] = React.useState(true);
  const [selectedTitle, setSelectedTitle] = React.useState("Música y arte");

  const handleClick = (title: string) => {
    // console.log(title);
    // selectedTitle === title ? setSelectedTitle("") : setSelectedTitle(title);
    setSelectedTitle(title);
  };

  const initial = {
    x: 200,
    opacity: 0,
  };

  const final = {
    opacity: 1,
    x: 0,
  };

  return (
    <section
      id="metodologia"
      className="sm:p-16 xs:p-8 px-6 py-12 relative z-10  bg-white "
    >
      <motion.div
        initial={initial}
        animate={animationComplete ? final : {}}
        transition={{
          duration: 1,
        }}
        onAnimationComplete={() => setAnimationComplete(true)}
        className="2xl:max-w-[1360px] w-full mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          initial={initial}
          animate={animationComplete ? final : {}}
          transition={{
            duration: 1,
          }}
          // onAnimationEnd={() => setAnimationComplete(true)}
          onAnimationComplete={() => setAnimationComplete(true)}
          className="flex-1 flex justify-center items-center"
        >
          <img
            src="https://www.cantajuegaconmigo.com/wp-content/uploads/2022/02/Untitled_Artwork-3-1.png"
            alt="CJ"
            className="w-[90%] object-cover"
          />
        </motion.div>
        <motion.div
          initial={initial}
          animate={animationComplete ? final : {}}
          transition={{
            duration: 1,
          }}
          onAnimationComplete={() => setAnimationComplete(true)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          {/* TITULO*/}

          <motion.h2
            initial={initial}
            animate={animationComplete ? final : {}}
            transition={{
              duration: 1,
            }}
            onAnimationComplete={() => setAnimationComplete(true)}
            className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-yellow-500`}
          >
            Metodología
          </motion.h2>

          {/* CONTENIDO */}

          <motion.div
            initial={initial}
            animate={animationComplete ? final : {}}
            transition={{
              duration: 1,
            }}
            onAnimationComplete={() => setAnimationComplete(true)}
            className="mt-[31px] flex flex-col justify-center  gap-[24px]"
          >
            {metodologies.map((feature, index) => (
              <StartSteps
                key={index}
                number={index + 1}
                text={feature.text}
                title={feature.title}
                selectedTitle={selectedTitle}
                index={index}
                handleClick={handleClick}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Metodologias;

const StartSteps = ({
  text,
  title,
  index,
  handleClick,
  selectedTitle,
}: any) => (
  <div
    onClick={() => handleClick(title)}
    className={`flex py-4 px-6 ${
      selectedTitle ? "flex-col" : "flex-row"
    } container-2xl border-2 rounded-md border-yellow-500 bg-white gap-4 justify-center items-center cursor-pointer`}
  >
    <h4 className="flex-1 justify-center ml-[30px] font-bold text-[18px] text-blue hover:text-yellow-500 leading-[32.4px] uppercase">
      {title}
    </h4>

    <div className="flex flex-col">
      {selectedTitle === title && (
        // <Modal title={title} text={text} />
        <div className="w-full mt-2   text-lg">
          <p className="text-gray-700 mx-full block">{text}</p>
        </div>
      )}
    </div>
  </div>
);
