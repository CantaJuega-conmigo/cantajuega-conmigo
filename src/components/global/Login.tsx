import { BsGoogle } from 'react-icons/bs'
import styles from '../styles/login.module.css'
export default function Login(){
    return (
        <div className={styles.Container}>
          
           <div className={styles.secondContainer}>

            <article>
              <button className={styles.Close}>X</button>
            </article>

            <h1>INICIA SESIÓN:</h1>

             <div className={styles.inputsContainer}>
                     
                    <label htmlFor="">USUARIO / CORREO ELECTRÓNICO</label>
                    <input type="text" /> 
                    <label htmlFor="">CONTRASEÑA</label>
                    <input type="text" />

                   <section className={styles.paswwordSection}>
                    <input type="checkbox" name="" className={styles.checkBox} id="Passwordvisible" />
                    <label htmlFor="">recuerdame </label>
                    <span>Olvidaste tu contraseña</span> 
                   </section>
                    <button type='button' className={styles.loginButton}>LOGIN</button>
                      <div className={styles.aux}>
                        <section></section>
                        <h5>O</h5>
                        <section></section>
                      </div>
                      <button type='button' className={styles.googleButton} >Login with google</button>
                
                </div>
          

                <button className={styles.Registerbutton}>
                    o Registrate
                </button>
      
           </div>

        </div>
    )
}