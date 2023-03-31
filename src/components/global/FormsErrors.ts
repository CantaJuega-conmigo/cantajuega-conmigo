const Regex = {
    email:'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
    password:'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$'
}



export const LoginError = (input:any, setError:any) => {

    if(input.email === '' && input.password === ''){
        setError(
            (prev)=>({
                ...prev,
                global:'El email es requerido',
            })
        )
        return
    }

    if(input.email === ''){
        setError('El email es requerido')
        return
    }

    if(input.password === ''){
        setError('La contraseña es requerida')
        return
    }

    if(!input.email.match(Regex.email)){
        setError('El email no es valido')
        return
    }

    if(!input.password.match(Regex.password)){
        setError('La contraseña no es valida')
        return
    }

    setError('')

}
