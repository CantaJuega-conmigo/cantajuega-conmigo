import styles from '../../styles/login.module.css'

interface RegisterProps {
   handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
 }
 
 const Register: React.FC<RegisterProps> = ({ handleOpen }) => {
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

         </div>
   
        
    </section>

 </div>
   )
}

export default Register;