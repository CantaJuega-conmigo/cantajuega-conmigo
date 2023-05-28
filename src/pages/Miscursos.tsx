import Alerts from '@/components/alerts/Alerts'
import {ChangeEvent, useState,MouseEvent, useEffect} from 'react'

import { Alertsprops, MiscursosAlerts,alertsState } from '@/components/alerts/types'

export default function Miscursos(){
    const [actualProgress,setActualProgress]=useState<number>(0)
    const [actualVideo,setActualVideo]=useState<string>('')
    const [videoPlay,setvideoPlay]=useState<boolean>()
   const [seeAlert,setSeeAlerts]=useState<alertsState>({///declarar el statte de alerts
    alert1:false,
    alert2:false
   })
  const closeAlert=()=>{//crear la funcion reset para cerrar los alerts
    setSeeAlerts({})
  }

    const [steps,setSteps]=useState<any>([
        {step:0,name:'Introduccion',visto:false, video:'video 1 introduccion'},
        {step:1,name:'1er cantajuego',visto:false, video:'video2'},
        {step:2,name:'2do cantajuego',visto:false, video:'video3'},
        {step:3,name:'Acercamiento',visto:false, video:'video4'},
        {step:4,name:'Interaccion',visto:false, video:'video5'},
        {step:5,name:'Artístico',visto:false, video:'video6'},
        {step:6,name:'Formulario',visto:false, video:'video7'}
    ])
   let vistos=steps.filter((i:any)=>i.visto).map((a:any)=>a.step+1).concat([0])
      
    const SelectStep= (event:MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        
        parseInt( event.currentTarget.value)<1?setActualProgress(parseInt( event.currentTarget.value))
        :steps[parseInt( event.currentTarget.value)-1].visto?setActualProgress(parseInt( event.currentTarget.value)):
        setSeeAlerts({text1:'Atencion.',text2:`Debe ver el video ${steps[vistos.length-1].name} para avanzar`});//creamos alerts personalizados
         
    }
  
    const nextStep=()=>{
        
        !steps[actualProgress].visto?setSeeAlerts({alert1:true})://o usamos alerts espesificos
        actualProgress<6?setActualProgress(actualProgress+1):alert('No hay mas')
        
    }
    // const updateAllows=()=>{
    //     let titles=document.getElementById()
    // }
    const play=()=>{
        setvideoPlay(true)
        setActualVideo(`Reproduciendo ${steps[actualProgress].name}....`)
        setTimeout(() => {
            setActualVideo('Termino el video')
            let steeeps= steps
            steeeps[actualProgress].visto=true
            setSteps(steeeps)
            setvideoPlay(false)
            
        }, 10000);
    }
    const actualtitlecolor={background:'#FFC172' ,borderRadius:'10px'}
    
    return(
        <div className={` flex bg-white`}>
         
             
            {seeAlert.alert1&&<Alerts close={closeAlert} Miscursos={MiscursosAlerts.Alert1} />/* usamos modales espesificos para los alerts*/}
            
            {seeAlert.text1&&<Alerts close={closeAlert} Personalizado={{text1:seeAlert.text1,text2:seeAlert.text2}}/>}

             

            <section className={` w-48 border-r-2 border-orangeicons border-dashed`}>
                <h1 className='' style={{}}>Mi progreso</h1>
       
                <ul>
                   {steps.map((i:any,key:any)=>
                   <li key={key} style={!vistos?.includes(key)?{color:'grey',cursor:'not-allowed'}:{color:'black'}} >
                       <button key={key} value={i.step} name={i.video} className={`${!vistos?.includes(key)?'cursor-not-allowed':'cursor-pointer'} p-2`} 
                          onClick={(e)=>SelectStep(e)} style={key===actualProgress?actualtitlecolor:{}} >
                            1.{i.step + 1}-{i.name}
                     </button>
                   </li>
                    
                    )}
                </ul>
            </section>

                    

                    
                   
            <section className={`flex flex-col w-full justify-center items-center`}>
                <div className={`flex flex-col justify-center items-center w-7/12  h-[20rem]`}>
                     <h1 className=''>{actualVideo}</h1>
                    <h1 className=''>{steps[actualProgress].video}</h1>
                    <video src="" className=' bg-[#D9D9D9] w-full h-5/6 '></video>
                    <button onClick={play}>play</button>
                </div>
                <div className={` w-full flex justify-center`}>
                    <button className=" border rounded border-orangeicons h-6/6 p-2 w-[8rem] ml-10 mr-10 bg-[#FFFFFF]">Anterior</button>
                    <button className=" rounded bg-orangeicons h-6/6 p-2 w-[8rem] ml-10 mr-10" onClick={nextStep} >Siguiente</button>
                </div>
            </section>

        </div>
    )
}