import React, { useState } from "react"
import useForm from "../../hooks/useForm"
import {ScreenContainer, LogoImage, InputsContainer, ArrowBackContainer} from "./style"
import logo from "../../assets/logo-future-eats-invert.png"
import { Button, TextField, Typography } from "@material-ui/core"
import { useHistory } from "react-router"
import { putAddAdress } from '../../services/putServices'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import { withStyles } from '@material-ui/core/styles'
import useProtectedPage from '../../hooks/useProtectedPage'
import { goToHome } from "../../routes/coordinator"

const StyledButton = withStyles({
  root: {
    padding: '0.7rem',
    marginTop: '0.7rem',
    marginBottom: '1rem'
  }
})(Button)

const AddressPage = () => {
    const [form, onChange, clear] = useForm({
        street: "", 
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    useProtectedPage()

    const goBack = () => {
        history.goBack()
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        putAddAdress(form, history, clear, goToHome)
    }

    return (
      
        <ScreenContainer>

            <LogoImage src={logo}/>

            <Typography variant="subtitle1" gutterBottom>Meu endereço</Typography>

            <InputsContainer>
               <form onSubmit={onSubmitForm}>
                  <TextField
                    name={"street"}
                    value={form.street}
                    onChange={onChange}
                    label={"Logradouro"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                    placeholder={"Rua / Av."}
                    />

                   <TextField
                     name={"number"}
                     value={form.number}
                     onChange={onChange}
                     label={"Número"}
                     variant={"outlined"}
                     fullWidth
                     margin={"normal"}
                     required
                     type={"number"}
                     placeholder={"Número"}
                   />

                  <TextField
                     name={"complement"}
                     value={form.complement}
                     onChange={onChange}
                     label={"Complemento"}
                     variant={"outlined"}
                     fullWidth
                     margin={"normal"}
                     type={"text"}
                     placeholder={"Apto. / Bloco"}
                   />

                  <TextField
                    name={"neighbourhood"}
                    value={form.neighbourhood}
                    onChange={onChange}
                    label={"Bairro"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                    placeholder={"Bairro"}
                    />

                  <TextField
                    name={"city"}
                    value={form.city}
                    onChange={onChange}
                    label={"Cidade"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                    placeholder={"Cidade"}
                    />

                  <TextField
                    name={"state"}
                    value={form.state}
                    onChange={onChange}
                    label={"Estado"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                    placeholder={"Estado"}
                    />

                   <StyledButton
                     type={"submit"}
                     fullWidth
                     variant={"contained"}
                     color={"primary"}
                     padding={10}
                   >
                    { isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Salvar</> }
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

export default AddressPage