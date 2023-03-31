import styles from '../../styles/login.module.css'
import { useState } from 'react'

interface RegisterProps {
   handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
 }
 interface InputProps {
  email: string;
  password: string;
  lastname: "",
  firstname: "",
}
interface ErrorProps {
  email?: string;
  password?: string;
  global?: string;
  lastname?: "",
  firstname?: "",
}



 const Register: React.FC<RegisterProps> = ({ handleOpen }) => {

  const [input, setInput] = useState<InputProps>({
    email: "",
    password: "",
    lastname: "",
    firstname: "",
  });

  const [error, setError] = useState<ErrorProps>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    // setError(loginError({
    //   ...input,
    //   [name]: value,
    // }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.keys(error).length) return console.log(error);
    ;
    // loginUser(input);
  };

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