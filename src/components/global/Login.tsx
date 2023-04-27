import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import styles from "../../styles/login.module.css";
import { useState } from "react";
import { loginUser } from "@/functions/user.query";
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
    if (Object.keys(error).length) return console.log(error);
    loginUser(input).then((res) => {
      handleOpen(AUTH_MODAL_TYPE.LOGIN);
    });
  };

  return (
    <div
      className={`fixed h-full w-full z-50 top-0 flex justify-center items-center`}
    >
      <div
        className={`rounded-xl p-3 shadow-2xl border border-black bg-white flex flex-col w-2/6 h-3/4 relative`}
      >
        <button
          className="absolute top-3 right-3"
          onClick={() => handleOpen(AUTH_MODAL_TYPE.LOGIN)}
        >
          <IoMdClose
            className="text-3xl cursor-pointer hover:text-blue hover:scale-110
             ease-in-out transition-all"
          />
        </button>
        <h1 className="m-5 mb-7 text-2xl">INICIA SESIÓN:</h1>

        <form className={`${styles.inputsContainer}`} onSubmit={handleSubmit}>
          <label htmlFor="">CORREO ELECTRÓNICO</label>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <label htmlFor="">CONTRASEÑA</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />

          <section className={styles.paswwordSection}>
            <input
              type="checkbox"
              name=""
              className={styles.checkBox}
              id="recurdame"
            />
            <label htmlFor="">recuerdame </label>
            <span className="absolute right-12 cursor-pointer">Olvidaste tu contraseña</span>
          </section>
          <div className="w-full flex justify-center">
          <button type="submit" className='bg-secondOrange mt-2 rounded-lg p-1 w-3/6'>
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
            className={`${styles.googleButton} flex items-center font-bold justify-center mb-24
          py-3 w-3/4`}
          >
            <FcGoogle className="text-3xl mr-2" />
            Login with google
          </button>
        </form>

        <button
          className={`${styles.Registerbutton} border font-bold text-2xl absolute left-0 bottom-0 rounded-b-lg m-0`}
        >
          o Registrate
        </button>
      </div>
    </div>
  );
};

export default Login;
