import styles from '../styles/login.module.css'
export default function Resgister(){
   return (
    <div className={styles.Container}>
          
    <section className={styles.secondContainer}>
     <h1>CREA UN USUARIO:</h1>
         <div className={styles.inputsContainer}>
              
             <label htmlFor="">USUARIO / CORREO ELECTRÓNICO</label>
             <input type="text" /> 
             <label htmlFor="">CONTRASEÑA</label>
             <input type="text" />

            <section className={styles.paswwordSection}>
             <input type="checkbox" name="" className={styles.checkBox} id="Passwordvisible" />
             <label htmlFor="">recuerdame </label>
            </section>
             <button type='button' className={styles.loginButton}>Crear</button>
               <div className={styles.aux}>
                 <section></section>
                 <h5>O</h5>
                 <section></section>
               </div>
               <button type='button' className={styles.googleButton} >Login with google</button>
      
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis rerum similique fuga, aperiam asperiores exercitationem consequatur ex delectus error? Commodi perspiciatis accusantium ipsam! Asperiores maxime vero voluptatum recusandae reiciendis.
            </span>
         </div>
   
        
    </section>

 </div>
   )
}