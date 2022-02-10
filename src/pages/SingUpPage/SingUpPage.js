import React, { useState } from "react"
import useForm from "../../hooks/useForm"
import {ScreenContainer, LogoImage, InputsContainer, ArrowBackContainer} from "./style"
import logo from "../../assets/logo-future-eats-invert.png"
import { Button, TextField, Typography } from "@material-ui/core"
import { useHistory } from "react-router"
import { signUp } from '../../services/User'
import CircularProgress from '@material-ui/core/CircularProgress'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import { withStyles } from '@material-ui/core/styles'

const StyledButton = withStyles({
  root: {
    padding: '0.7rem',
    marginTop: '0.7rem',
    marginBottom: '1rem'
  }
})(Button)

const SignUpPage = () => {
    const [form, onChange, clear] = useForm({
        name: "", 
        email: "",
        cpf: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const history = useHistory()

    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onMouseDownPassword = () => {
        setShowPassword(!showPassword)
    }

    const goBack = () => {
        history.goBack()
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setIsLoading)
    }

    return (
      
        <ScreenContainer>

            <LogoImage src={logo}/>

            <Typography variant="subtitle1" gutterBottom>Cadastrar</Typography>

            <InputsContainer>
               <form onSubmit={onSubmitForm}>
                  <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                    placeholder={"Nome e sobrenome"}
                    />

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
                     name={"cpf"}
                     value={form.cpf}
                     onChange={onChange}
                     label={"CPF"}
                     variant={"outlined"}
                     fullWidth
                     margin={"normal"}
                     required
                     type={"number"}
                     placeholder={"000.000.000-00 (apenas números)"}
                     inputProps={{ pattern: "^\d{3}\.\d{3}\.\d{3}\-\d{2}$" }}
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
                     type={showPassword ? 'text' : 'password'}
                     placeholder={"Mínimo de 6 caracteres"}
                     inputProps={{ pattern: "^.{6,}" }}
                     InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={onClickShowPassword}
                              onMouseDown={onMouseDownPassword}
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                   /> 

                  <TextField
                     name={"confirm_password"}
                     value={form.password}
                     onChange={onChange}
                     label={"Confirmar"}
                     variant={"outlined"}
                     fullWidth
                     margin={"normal"}
                     required
                     type={showPassword ? 'text' : 'password'}
                     placeholder={"Confirme a senha anterior"}
                     inputProps={{ pattern: "^.{6,}" }}
                     InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={onClickShowPassword}
                              onMouseDown={onMouseDownPassword}
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                   /> 

                   <StyledButton
                     type={"submit"}
                     fullWidth
                     variant={"contained"}
                     color={"primary"}
                     padding={10}
                   >
                    { isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Criar</> }
                   </StyledButton>
               </form>
            </InputsContainer>

            <ArrowBackContainer>
            <IconButton
                onClick={() => goBack(history)} 
                size="larger"
                type="submit"
                aria-label="ArrowBackIos"
                >
                <ArrowBackIos style={{fill: "black"}} fontSize="large" />
            </IconButton> 
            </ArrowBackContainer>

        </ScreenContainer>
    )
}

export default SignUpPage