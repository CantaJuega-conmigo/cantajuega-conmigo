import { AUTH_MODAL_TYPE } from '@/utils';
import styles from '../../styles/register.module.css'
import { useState } from 'react'
import { registerError } from './FormsErrors';

interface RegisterProps {
   handleOpen: (name: AUTH_MODAL_TYPE) => void;
 }
 interface InputProps {
  email: string;
  password: string;
  lastName: string,
  firstName: string,
}
interface ErrorProps {
  email?: string;
  password?: string;
  global?: string;
  lastName?: string,
  firstName?:string,
}



 const Register: React.FC<RegisterProps> = ({ handleOpen }) => {

  const [input, setInput] = useState<InputProps>({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
  });

  const [error, setError] = useState<ErrorProps>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    console.log(input);
    
    setError(registerError({
      ...input,
      [name]: value,
    }));
    console.log(error)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.keys(error).length) return console.log(error);
     console.log('Creado')
  };

  function showPassword(): void {
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
  
   return (
    <div className={styles.Container}>
          
    <section className={styles.secondContainer}>
     <article>
          <button className={styles.Close}
            onClick={()=> handleOpen(AUTH_MODAL_TYPE.REGISTER)} 
          >
            X
          </button>
        </article>
     <h1>CREA UN USUARIO:</h1>
         <form className={styles.inputsContainer} onSubmit={handleSubmit}>
              
             <label htmlFor="">NOMBRE</label>
             <input type="text" onChange={handleChange} name='firstName' /> 
             <label htmlFor="">APELLIDO</label>
             <input type="text" onChange={handleChange} name='lastName' /> 
             <label htmlFor="">CORREO ELECTRÓNICO</label>
             <input type="text" onChange={handleChange} name='email'/> 
             <label htmlFor="">CONTRASEÑA</label> 
             <input type="password" onChange={handleChange} name='password' id='password' />
               <section><label  >mostrar contraseña</label> <input type="checkbox" onChange={showPassword} /></section> 
            <section className={styles.paswwordSection}>
             <input type="checkbox" name="" className={styles.checkBox} id="Passwordvisible" />
             <label htmlFor="">recuerdame </label>   
             <span className={styles.Modal} onClick={() => {
            handleOpen(AUTH_MODAL_TYPE.LOGIN)
            handleOpen(AUTH_MODAL_TYPE.REGISTER)
          }}>ya tengo cuenta</span>
            </section>
             <button type='submit' className={styles.loginButton} >Crear</button>
          
               <div className={styles.aux}>
                 <section></section>
                 <h5>O</h5>
                 <section></section>
               </div>
               <button type='button' className={styles.googleButton} >Login with google</button>
  
         </form>
   
        
    </section>

 </div>
   )
}

export default Register;