const Regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,30}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,30}$/,
  firstName:/^[a-zA-Z]+$/,
  lastName:/^[a-zA-Z]+$/
};

interface ErrorProps {
  email?: string;
  password?: string;
  global?: string;
  firstName?:string,
  lastName?:string
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
export const registerError = (input: any) => {
  const error: ErrorProps = {};
  if (input.email === "" || input.password === "" ||!input.firstName || !input.lastName) {
    error.global = "Todos los campos son obligatorios";
  }

  if (!Regex.email.test(input.email)) {
    error.email = "El email no es valido";
  }

  if (!Regex.password.test(input.password)) {
    error.password = "La contraseña no es segura";
  }
  if (!Regex.firstName.test(input.firstName)) {
    error.firstName = "Nombre solo debe tener letras";
  }
  if (!Regex.lastName.test(input.lastName)) {
    error.lastName = "Apellido solo debe tener letras";
  }
  return error;
};
