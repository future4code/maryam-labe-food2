import React, { useState } from "react"
import useForm from "../../hooks/useForm"
import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer, ContainerErrorMsg } from "./style"
import logo from "../../assets/logo-future-eats-invert.png"
import { Button, TextField, Typography } from "@material-ui/core"
import { goToHome, goToSingUp } from "../../routes/coordinator"
import { useHistory } from "react-router"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'


const StyledButton = withStyles({
  root: {
    padding: '0.7rem',
    marginTop: '0.7rem',
    marginBottom: '1rem'
  }
})(Button)



const LoginPage = () => {

  const history = useHistory()
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [span, setSpan] = useState('')

  const onClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const onMouseDownPassword = () => {
    setShowPassword(!showPassword)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    login()
  }

  const login = () => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToHome(history)
      })
      .catch((error) => {
        setIsLoading(false)
        setSpan(error.response.data.message) //SPAN - ContainerErrorMsg
      })
  }
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
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
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={showPassword ? 'text' : 'password'}
            placeholder={"Mínimo de 6 caracteres"}
            inputProps={{ pattern: "^.{6,}" }}
          />

          <ContainerErrorMsg>
            {span}
          </ContainerErrorMsg>

          <StyledButton
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Entrar</>}
          </StyledButton>
        </form>
      </InputsContainer>
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSingUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"neutralColor"}
        >
          Não possui cadastro? Clique aqui.
        </Button>
      </SignUpButtonContainer>

    </ScreenContainer>
  )
}

export default LoginPage