import { useState} from 'react'
import { Alertsprops, MiscursosAlerts ,MembresiasAlerts,PagosAlerts, CuestionarioAlerts} from './types'
import Login from '../global/Login'
import { AUTH_MODAL_TYPE } from '@/utils/constants';
import Register from '../global/Register';
import Link from 'next/link';
interface OpenInterface {
    LOGIN: boolean;
    REGISTER: boolean;
  }
export default function Alerts({Miscursos,Membresias,Personalizado,Pagos,Cuestionario,close}:Alertsprops){
    const [open, setOpen] = useState<OpenInterface>({
        LOGIN: false,
        REGISTER: false,
      });

      const handleOpen = (name: AUTH_MODAL_TYPE) => {
        setOpen((prevOpen) => ({
          ...prevOpen,
          [name]: !prevOpen[name],
        }));
      };
    
    
 return(
    <div id='alert' className="bg-[#D9D9D9A1] absolute w-full h-full justify-center items-center top-0 z-50 flex" >

       {Miscursos===MiscursosAlerts.Alert1&&
       <section className="bg-white w-6/12 h-3/6 flex flex-col items-center justify-evenly">
            <h1>¡Recuerda!</h1>
            <h1>AUN NO PUEDES AVANZAR</h1>
            <button className="bg-orange p-2 rounded-lg" onClick={close}>CONTINUAR</button>
        </section>}

        {Membresias===MembresiasAlerts.Alert1&&
        <section className="bg-white w-6/12 h-3/6 flex flex-col items-center justify-evenly">
             <h1>UPS ALGO HA SALIDO MAL :(</h1>
             <h1 className='w-7/12 text-center leading-6 font-medium '>AL PARECER NO TIENES UNA CUENTA.
                SI DESEAS SUSCRIBIRTE A UNA MEMBRESIA 
                NECESITAS CREAR UN PERFIL.
             </h1>
             <div className='flex '>
             <button className="p-2 rounded-lg m-2 border border-orangeicons" onClick={close}>CANCELAR</button>
             <button className="bg-orange p-2 rounded-lg m-2" onClick={() => handleOpen(AUTH_MODAL_TYPE.REGISTER)}>INSCRIBIRSE</button>
             </div>
             {open.LOGIN && <Login handleOpen={handleOpen} />}
             {open.REGISTER && <Register handleOpen={handleOpen} />}
         </section>}
        {Pagos===PagosAlerts.SALDOINSUFICIENTE&&
        <section className="bg-white w-6/12 h-3/6 flex flex-col items-center justify-evenly">
             <h1>SALDO INSUFICIENTE</h1>
             <h1 className='w-7/12 text-center leading-6 font-medium '>AL PARECER NO TIENES UNA CUENTA.
              INTENTA PROBANDO POR OTRO MEDIO DE PAGO
             </h1>
             <div className='flex '>
             <button className="p-2 rounded-lg m-2 border border-orangeicons" onClick={close}>CANCELAR</button>
             <button className="bg-orange p-2 rounded-lg m-2" onClick={() =>console.log('Reintentar pago')}>Reintentar</button>
             </div>
         </section>}
         
        {Pagos===PagosAlerts.ERRORDEPAGO&&
        <section className="bg-white w-6/12 h-3/6 flex flex-col items-center justify-evenly">
             <h1>UPS EN ESTOS MOMENTOS NO PODEMOS PROCESAR EL PAGO</h1>
             <h1 className='w-7/12 text-center leading-6 font-medium '>
                INTENTA DE NUEVO MAS TARDE. <br />
                LO SENTIMOS
             </h1>
             <div className='flex '>
             <button className="p-2 rounded-lg m-2 border border-orangeicons" onClick={close}>CANCELAR</button>
             <button className="bg-orange p-2 rounded-lg m-2" onClick={() =>console.log('Reintentar pago')}>Reintentar</button>
             </div>
         </section>}

        {Pagos===PagosAlerts.ERROR3&&
        <section className="bg-white w-6/12 h-3/6 flex flex-col items-center justify-evenly">
             <h1>NO PUEDES ACCEDER A ESTE SERVICIO</h1>
             <h1 className='w-7/12 text-center leading-6 font-medium '>
                AL PARECER YA ESTAS SUSCRIPTO A UNA MEMBRESIA.
             </h1>
             <div className='flex '>
             <button className="p-2 rounded-lg m-2 border border-orangeicons" onClick={close}>CANCELAR</button>
             <Link href={'/'}>
             <button className="bg-orange p-2 rounded-lg m-2">Home</button>
             </Link>
             </div>
         </section>}
        {Cuestionario===CuestionarioAlerts.Confirm&&
        <section className="bg-white w-6/12 h-3/6 flex flex-col items-center justify-evenly">
             <h1>ATENCIÓN</h1>
             <h1 className='w-7/12 text-center leading-6 font-medium '>
             ¿DESEA USTED GUARDAR Y ENVIAR LOS DATOS?
             </h1>
             <div className='flex '>
             <button className="p-2 rounded-lg m-2 border border-orangeicons" onClick={close}>No</button>
             <button className="bg-orange p-2 rounded-lg m-2">SI</button>        
             </div>
         </section>}
       
       {Personalizado&&
       <section className="bg-white w-6/12 h-3/6 flex flex-col items-center justify-evenly">
            <h1>{Personalizado.text1}</h1>
            <h1>{Personalizado.text2}</h1>
            <button className="bg-orange p-2 rounded-lg" onClick={close}>CONTINUAR</button>
        </section>}
        
        
    </div>
 )
}