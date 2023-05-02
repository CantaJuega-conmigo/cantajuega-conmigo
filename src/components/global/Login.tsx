import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import styles from "../../styles/login.module.css";
import { useState } from "react";
import { loginUser, loginwithGoogle } from "@/functions/user.query";
import { loginError } from "./FormsErrors";
import { AUTH_MODAL_TYPE } from "@/utils";

interface LoginProps {
  handleOpen: (name: AUTH_MODAL_TYPE) => void;
}

interface InputProps {
  email: string;
  password: string;
}
interface ErrorProps {
  email?: string;
  password?: string;
  global?: string;
}

const Login: React.FC<LoginProps> = ({ handleOpen }) => {
  const [input, setInput] = useState<InputProps>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<ErrorProps>({});
  const [visibleErrors,setVisibleErrors]=useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    setError(
      loginError({
        ...input,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(error).length){
      error.global&&alert(error.global)
       return setVisibleErrors(true)
      
      }
    loginUser(input).then((res) => {
      handleOpen(AUTH_MODAL_TYPE.LOGIN);
    });
  };

  return (
    <div
      className={`fixed h-full w-full z-50 top-0 flex justify-center items-center`}
    >
      <div
        className={`rounded-xl p-3 h-90 shadow-2xl w-80 border border-black bg-white flex flex-col  `}
      > 
      <div className='flex justify-end'>
        <button
          className=" "
          onClick={() => handleOpen(AUTH_MODAL_TYPE.LOGIN)}
        >
          <IoMdClose
            className="text-3xl cursor-pointer hover:text-blue hover:scale-110
             ease-in-out transition-all"
          />
        </button>
      </div>
        <h1 className="m-5 mb-1 text-2xl">INICIA SESIÓN:</h1>

        <form className={`${styles.inputsContainer}`} onSubmit={handleSubmit}>
          <label htmlFor="">CORREO ELECTRÓNICO</label>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
            {visibleErrors&&error.email&&<span className='text-red-500'>{error.email}</span>}
          <label htmlFor="">CONTRASEÑA</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
            {visibleErrors&&error.password&&<span className="text-red-500">{error.password}</span>}
          <section className={styles.paswwordSection}>
            <div className={styles.pasword1}>
              <input
                type="checkbox"
                name=""
                className={styles.checkBox}
                id="recurdame"
              />
              <label htmlFor="">recuerdame </label>
            </div>
            <div  className={styles.pasword2}>
            <span className="  cursor-pointer">Olvidaste tu contraseña</span>
            </div>
          </section>

          <div className="w-full flex justify-center">
          <button type="submit" className='bg-secondOrange mt-2 rounded-lg p-1 w-3/6 hover:bg-secondOrange/75'>
            LOGIN
          </button>
          </div>
          <div className={styles.aux}>
            <section></section>
            <h5>O</h5>
            <section></section>
          </div>
          
          <button
            type="button"
            className={`${styles.googleButton} `}
          onClick={loginwithGoogle}
          >
            <FcGoogle className={styles.googlelogo} />
            Login with google
          </button>
        </form>

        <button
          className={`${styles.Registerbutton} border font-bold text-2xl  left-0 bottom-0 rounded-b-xl m-0`}
          onClick={() => {
            handleOpen(AUTH_MODAL_TYPE.LOGIN)
            handleOpen(AUTH_MODAL_TYPE.REGISTER)
          }}
        >
          o Registrate
        </button>
      </div>
    </div>
  );
};

export default Login;
