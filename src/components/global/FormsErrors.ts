const Regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,30}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,30}$/,
};

interface ErrorProps {
  email?: string;
  password?: string;
  global?: string;
}

export const loginError = (input: any) => {
  const error: ErrorProps = {};
  if (input.email === "" || input.password === "") {
    error.global = "Todos los campos son obligatorios";
  }

  if (!Regex.email.test(input.email)) {
    error.email = "El email no es valido";
  }

  if (!Regex.password.test(input.password)) {
    error.password = "La contraseña no es valida";
  }

  return error;
};
