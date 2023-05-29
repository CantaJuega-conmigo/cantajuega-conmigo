export default function Cuestionario (){
    return (
        <div className="flex h-[45rem] justify-center bg-white relative  ">
             <div className="flex flex-col items-center w-[24rem]  p-3 ">
                <section className="flex flex-col  h-[15rem] w-full justify-evenly ">
                    <article>
                       <h1>Nombre adulto responsable</h1>
                    </article>
                    <article className="flex justify-between items-center">
                        <label htmlFor="" className="w-4/12">Nombre: </label>
                        <input type="text" className="w-7/12 border border-gray-400" />
                    </article>
                    <article className="flex justify-between items-center">
                        <label htmlFor="" className="w-4/12">Apellido: </label>
                        <input type="text" className="w-7/12 border border-gray-400" />
                    </article>
                    <article className="flex justify-between items-center">
                        <label htmlFor="" className="w-4/12">Numero telefónico: </label>
                        <input type="text" className="w-7/12 border border-gray-400" />
                    </article>
                    <article className="flex justify-between items-center">
                        <label htmlFor="" className="w-4/12">Edad: </label>
                        <input type="text" className="w-7/12 border border-gray-400" />
                    </article>
                </section>

                <section className="flex flex-col h-[15rem] w-full   justify-evenly">
                    <h1>Datos del niño o niña</h1>
                    <article className="flex justify-between items-center">
                        <label htmlFor="" className="w-4/12">Nombre</label>
                        <input type="text" className="w-7/12 border border-gray-400"/>
                    </article>
                    <article className="flex justify-between items-center">
                        <label htmlFor="" className="w-4/12">Apellido</label>
                        <input type="text" className="w-7/12 border border-gray-400"/>
                    </article>
                    <article className="flex justify-between items-center">
                        <label htmlFor="" className="w-8/12">Cantidad de palabras que dice de forma clara</label>
                        <select name="" id="">
                            <option value="Default">Seleccione:</option>
                            <option value="0 a 10">0 a 10</option>
                            <option value="11 a 20">11 a 20</option>
                            <option value="20 a 30">20 a 30</option>
                            <option value="30 a 50">30 a 50</option>
                            <option value="50 a 70">50 a 70</option>
                        </select>
                    </article>
                </section>
             </div>


             <div className="flex flex-col justify-between ">
                <section className="flex h-[13rem] justify-evenly">
                    <article className="    justify-evenly h-full flex flex-col w-5/12 items-center">
                        <h1 className=" text-center">¿Alguien de la familia ha tenido dificultades en el desarrollo del lenguaje?</h1>
                           
                           <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                            <label htmlFor="">Si</label>
                            <input type="checkbox" name="" id="" />
                           </article>
                           <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                           <label htmlFor="">No</label>
                            <input type="checkbox" name="" id="" />
                           </article>
                           <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                           <label htmlFor="">Cual</label>
                            <input type="text" className="border border-gray-400" name="" id="" />
                           </article>
                    </article>
                    <article className="    justify-evenly h-full flex flex-col items-center w-5/12">
                        <h1 className=" text-center">¿Presenta alguna dificultad en la pronunciación de algún fonema “r”, “l”, “d”, “t”?</h1>
                         <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                            <label htmlFor="">Si</label>
                            <input type="checkbox" />
                         </article>
                         <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                            <label htmlFor="">No</label>
                            <input type="checkbox" />
                         </article>
                         <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                            <label htmlFor="">Algunas veces</label>
                            <input type="checkbox" />
                         </article>
                    </article>
                </section>
                <section className="flex h-[13rem] pl- pr-5 justify-evenly">
                    <article className="    justify-evenly h-full flex flex-col items-center w-5/12">
                        <h1 className=" text-center">¿En el establecimiento educativo han indicado que el niño o niña necesita mejorar su lenguaje?</h1>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                          <label htmlFor="">Si</label>
                          <input type="checkbox" name="" id="" />
                       </article>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                        <label htmlFor="">No</label>
                        <input type="checkbox" name="" id="" />
                       </article>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                        <label htmlFor="">No se encuentra en ningún establecimiento educativo</label>
                         <input type="checkbox" name="" id="" />
                       </article>
                       
                    </article>
                    <article className="    justify-evenly h-full flex flex-col items-center w-5/12">
                        <h1 className=" text-center">¿Cuándo dice una palabra con “s”, la misma suena como si fuera “d”?</h1>
                        <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                          <label htmlFor="">Si</label>
                          <input type="checkbox" name="" id="" />
                       </article>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                        <label htmlFor="">No</label>
                        <input type="checkbox" name="" id="" />
                       </article>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                        <label htmlFor="">Algunas veces.</label>
                         <input type="checkbox" name="" id="" />
                       </article>
                    </article>
                </section>
                <section className="flex h-[13rem] pl- pr-5 justify-evenly">
                <article className="    justify-evenly h-full flex flex-col items-center w-5/12">
                        <h1 className=" text-center">¿Cuándo dice una palabra con “r”, la misma suena como si fuera “l”?</h1>
                        <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                          <label htmlFor="">Si</label>
                          <input type="checkbox" name="" id="" />
                       </article>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                        <label htmlFor="">No</label>
                        <input type="checkbox" name="" id="" />
                       </article>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem]">
                        <label htmlFor="">Algunas veces.</label>
                         <input type="checkbox" name="" id="" />
                       </article>
                </article>
                <article className=" h-full flex flex-col justify-around items-center w-5/12">
                        <h1 className=" text-center m-3">¿Tiene poco lenguaje, utiliza solo frases u oraciones cortas?</h1>
                        <div className="h-[8rem] flex flex-col justify-start ">

                            <article className="flex   mb-1  items-center w-[15rem] justify-between h-[2rem]">
                            <label htmlFor="">Si</label>
                            <input type="checkbox" name="" id="" />
                        </article>

                        <article className="flex   mb-1  items-center w-[15rem] justify-between h-[2rem]">
                            <label htmlFor="">No</label>
                            <input type="checkbox" name="" id="" />
                        </article>
                        </div>
                        
                </article>
                    
                </section>
             </div>
             <button className="absolute bottom-0 bg-blue right-0 h-12 w-32 rounded-full text-[#FFFFFF] ">Guardar</button>
        </div>
    )
}