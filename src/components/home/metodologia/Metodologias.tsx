import styles from '../../../styles/Metodologias.module.css'
import image from '../../../../public/img/Untitled_Artwork-3-1.png'
import Image from 'next/image'
import { useState ,MouseEvent} from 'react'
import Modal from './Modal'
import { ModalContent,Types,Neuroeducacion,Music_art,VideoModelling } from './Interfaces'

export default function Metodologias(){
  const [modal,setModal]=useState<boolean>(false)
  const [actualModal,setActualModal]=useState<ModalContent>({
    text:'',
    title:''
  })
  const closemodal=()=>{
    setModal(false)
  }
  
  const setContentModal=(e:MouseEvent<HTMLButtonElement>):void=>{
     const value:string=e.currentTarget.value
     let content:ModalContent ={text:'',title:''};
     value===Neuroeducacion.title?content=Types.Neuroeducacion:
     value===Music_art.title?content=Types.Music_art:
     value===VideoModelling.title?content=Types.VideoModelling:null
    setActualModal(content)
    setModal(true)
  }
   return (
    <div className={`${styles.Container} h-[25rem] `} id='metodologia'>
      <section className='flex flex-col items-center justify-center h-full   relative'>
        <article className='z-20 h-1/6 '>
        <h1 className=' text-5xl text-yellow'>Metodología</h1>
        </article>

        <article className='z-20 flex h-5/6 flex-col items-center justify-around  w-full'>   
          <button className='h-[3rem]  w-[25%] max-w-[25rem] flex items-center justify-between' onClick={setContentModal} value={Neuroeducacion.title}>
            <span className='bg-blue w-[3.2rem] h-full flex items-center justify-center rounded-lg text-3xl'>1</span>
            <span className=' w-[80%]  h-full items-center flex text-blue justify-center
            text-base  2xl:text-5xl xl:text-4xl lg:text-3xl'>
              Neuroeducación</span>
          </button>
          <button className='h-[3rem]  w-[25%] max-w-[25rem] flex items-center justify-between' onClick={setContentModal} value={Music_art.title}>
            <span className='bg-blue w-[3.2rem] h-full flex items-center justify-center rounded-lg text-3xl'>2</span>
            <span className=' w-[80%]  h-full items-center flex text-blue justify-center
            text-base  2xl:text-5xl xl:text-4xl lg:text-3xl'>
              Música y arte</span>
          </button>
          <button className='h-[3rem]  w-[25%] max-w-[25rem] flex items-center justify-between' onClick={setContentModal} value={VideoModelling.title}>
            <span className='bg-blue w-[3.2rem] h-full flex items-center justify-center rounded-lg text-3xl'>3</span>
            <span className=' w-[80%]  h-full items-center flex text-blue justify-center
            text-base  2xl:text-5xl xl:text-4xl lg:text-3xl'>
              Video modeling</span>
          </button>
        </article>
      <Image alt='cjimgs' src={image} className=' z-10 absolute top-0 min-w-[15rem] w-[39%] h-auto  lg:h-full lg:w-auto left-[0%] 2xl:left-[10%]'/>
      </section>
      {modal&&<Modal closeModal={closemodal} text={actualModal.text} title={actualModal.title}/>}
    </div>
   )
}