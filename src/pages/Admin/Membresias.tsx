import AdminHeader from "@/components/Admin/AdminHeader";
import MembershipCard from "@/components/membership/MembershipCard";
import { Membership } from "@/types/membership.type";
import firstbackground from "../../../public/img/Untitled_Artwork 3.png";
import secondbackground from "../../public/img/Untitled_Artwork 5.png";
import Alerts from "@/components/alerts/Alerts";
import { AdminAlerts, alertsState } from "@/components/alerts/types";
import { useState ,MouseEvent} from "react";
import Link from "next/link";
export default function Membresias(){
    let fake:Membership[]=[
        {
        id: '',
        name: 'Mensual',
        description: 'string',
        price: 5,
        duration: 5,
        therapeuticTools: true,
        music: true,
        videos: true,
        recurrenteId: 'string',
        status: 'string'},
        {
        id: '',
        name: 'Semestral',
        description: 'string',
        price: 5,
        duration: 5,
        therapeuticTools: true,
        music: true,
        videos: true,
        recurrenteId: 'string',
        status: 'string'},
        {
        id: '',
        name: 'Anual',
        description: 'string',
        price: 5,
        duration: 5,
        therapeuticTools: true,
        music: true,
        videos: true,
        recurrenteId: 'string',
        status: 'string'},
        {
        id: '',
        name: 'Anual',
        description: 'noseeeee',
        price: 5,
        duration: 5,
        therapeuticTools: true,
        music: true,
        videos: true,
        recurrenteId: 'string',
        status: 'string'}
    ] 
    const [seeAlert,setSeeAlerts]=useState<alertsState>({///Traer la interface alertsState para tipar 
        alert1:false,
        text1:'',    
       })

    const closeAlert=()=>{//crear la funcion reset para cerrar los alerts
        setSeeAlerts({})
      }
    const PreConfirm=(event:MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        setSeeAlerts({text1:'DESEA GUARDAR LOS CAMBIOS?',text2:'Los cambio se guardaran  en la pagina web.',CancelText:'Cancelar',AcceptTText:'Guardar'})
    }
    const SaveChanges=(event:MouseEvent<HTMLButtonElement>)=>{
       event.preventDefault();
       closeAlert();
       console.log('guardado')

    }
    return (
        <div className="  min-h-screen flex flex-col gap-40" >
            <AdminHeader statistics={false} />
    
            <section className=" w-[70%] m-auto  grid grid-flow-row  grid-cols-2  gap-8 ">
            {fake.map((i,key)=>
            <article key={key} className=" m-auto">
                <MembershipCard  membership={i} color="#b62525" image={firstbackground} Admin={true}/>
            </article>
            )}
            </section>
            <section className="w-full flex flex-col items-center gap-5">
                <button className="text-white bg-black text-3xl h-[3rem] w-[3rem] rounded-full">+</button>
                <article className="w-full flex justify-center gap-5">
                    <Link href={'/Admin'} >
                    <button className="border-2 border-black p-3 w-[10rem]">Cancelar</button>
                    </Link>
                    <button className="border-2 border-black p-3 w-[10rem]" onClick={PreConfirm}>Guardar</button>
                </article>
            </section>
          {seeAlert.text1&&  <Alerts Personalizado={seeAlert}  close={closeAlert} onClick={SaveChanges}/>}
        </div>
    )
}