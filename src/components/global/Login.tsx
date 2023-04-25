import { BsGoogle } from "react-icons/bs";
import styles from "../../styles/login.module.css";
import { useState } from "react";
import { loginUser } from "@/functions/user.query";
import { loginError } from "./FormsErrors";

interface LoginProps {
  handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
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

    setError(loginError({
      ...input,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.keys(error).length) return console.log(error);
    ;
    loginUser(input);
  };

  return (
    <div className={`${styles.Container}`}>
      <div className={`${styles.secondContainer}`}>
        <article>
          <button className={styles.Close} id="login" onClick={handleOpen}>
            X
          </button>
        </article>

        <h1>INICIA SESIÓN:</h1>

        <form className={styles.inputsContainer}
           onSubmit={handleSubmit}
        >
          <label htmlFor="">USUARIO / CORREO ELECTRÓNICO</label>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <label htmlFor="">CONTRASEÑA</label>
          <input
            type="text"
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
            <span>Olvidaste tu contraseña</span>
          </section>
          <button type="submit" className={styles.loginButton}
       
          >
            LOGIN
          </button>
          <div className={styles.aux}>
            <section></section>
            <h5>O</h5>
            <section></section>
          </div>
          <button type="button" className={styles.googleButton}>
            Login with google
          </button>
        </form>

        <button className={styles.Registerbutton}>o Registrate</button>
      </div>
    </div>
  );
};

export default Login;
