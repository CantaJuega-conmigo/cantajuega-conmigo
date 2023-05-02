import { AUTH_MODAL_TYPE } from '@/utils';
import styles from '../../styles/register.module.css'
import { useState } from 'react'
import { registerError } from './FormsErrors';
import { IoMdClose } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';

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
  const [visibleErrors,setVisibleErrors]=useState<boolean>(false)

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
    if(Object.keys(error).length){
       error.global&&alert(error.global)
       return setVisibleErrors(true),
       setTimeout(() => {
        setVisibleErrors(false)
       }, 10000);
      }
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
          
    <section className={`${styles.secondContainer} bg-white`}>
      
        <article className='flex justify-end '>
        <button
              className={'m-1'}
              onClick={() => handleOpen(AUTH_MODAL_TYPE.REGISTER)}
            > 
              <IoMdClose
                className="text-3xl cursor-pointer hover:text-blue hover:scale-110
                ease-in-out transition-all"
              />
            </button>
          </article>

         <form className={styles.inputsContainer} onSubmit={handleSubmit}>
         <h1 className='m-5 mb-7 text-2xl'>CREA UN USUARIO:</h1>
              
             <label htmlFor="">NOMBRE</label>
             <input type="text" onChange={handleChange} name='firstName' /> 
             {visibleErrors&&error.firstName&&<span className='text-red-500'>{error.firstName}</span>}
             <label htmlFor="">APELLIDO</label>
             <input type="text" onChange={handleChange} name='lastName' /> 
             {visibleErrors&&error.lastName&&<span className='text-red-500'>{error.lastName}</span>}

             <label htmlFor="">CORREO ELECTRÓNICO</label>
             <input type="text" onChange={handleChange} name='email'/> 
             {visibleErrors&&error.email&&<span className='text-red-500'>{error.email}</span>}

             <label htmlFor="">CONTRASEÑA</label> 
             <input type="password" onChange={handleChange} name='password' id='password' />
             {visibleErrors&&error.password&&<span className='text-red-500'>{error.password}</span>}

               <section><label  >mostrar contraseña</label> <input type="checkbox" onChange={showPassword} /></section> 
            <section className={styles.paswwordSection}>
             <input type="checkbox" name="" className={styles.checkBox} id="Passwordvisible" />
             <label htmlFor="">recuerdame </label>   
             <span className={styles.Modal} onClick={() => {
            handleOpen(AUTH_MODAL_TYPE.LOGIN)
            handleOpen(AUTH_MODAL_TYPE.REGISTER)
          }}>ya tengo cuenta</span>
            </section>

             <button type='submit' className={styles.loginButton} >
              Crear
              </button>
          
               <div className={styles.aux}>
                 <section></section>
                 <h5>O</h5>
                 <section></section>
               </div>
               <button
            type="button"
            className={`${styles.googleButton} flex items-center font-bold justify-center mb-32
          py-3 w-3/4`}
        
          >
            <FcGoogle className="text-3xl mr-2" />
            Login with google
          </button>
         </form>
    </section>

 </div>
   )
}

export default Register;