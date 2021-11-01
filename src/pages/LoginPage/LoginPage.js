import React from "react"
import useForm from "../../hooks/useForm"
import {ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer, Text} from "./style"
import logo from "../../assets/logo-future-eats-invert.png"
import { Button, TextField, Typography } from "@material-ui/core"
import {goToHome, goToSingUp} from "../../routes/coordinator"
import { useHistory } from "react-router"
import axios from "axios"
import {BASE_URL} from "../../constants/urls"
const LoginPage = () => {

    const history = useHistory()
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const onSubmitForm = (event) => {
        event.preventDefault()
        login()
    }

    const login = () => {
        axios.post(`${BASE_URL}/login`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToHome(history)
        })
        .catch((error) => {
            alert("Erro no login")
        })
    }
    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <Typography variant="subtitle1" gutterBottom>Entrar</Typography>
            <InputsContainer>
               <form onSubmit={onSubmitForm}>
                   <TextField
                     name={"email"}
                     value={form.email}
                     onChange={onChange}
                     label={"E-mail"}
                     variant={"outlined"}
                     fullWidth
                     margin={"normal"}
                     required
                     type={"email"}
                     placeholder={"email@email.com"}
                   />
                   <TextField
                     name={"password"}
                     value={form.password}
                     onChange={onChange}
                     label={"Senha"}
                     variant={"outlined"}
                     fullWidth
                     margin={"normal"}
                     required
                     type={"password"}
                     placeholder={"Mínimo de 6 caracteres"}
                     inputProps={{ pattern: "^.{6,}" }}
                   /> 

                   <Button
                     type={"submit"}
                     fullWidth
                     variant={"contained"}
                     color={"primary"}
                   >
                       Entrar
                   </Button>
               </form>
            </InputsContainer>
            <SignUpButtonContainer
            onClick={() => goToSingUp(history)}
              type={"submit"}
              fullWidth
              variant={"text"}
            >
                Não possui cadastro? Clique aqui.
            </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default LoginPage