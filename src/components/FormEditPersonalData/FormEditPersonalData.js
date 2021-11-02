import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import { putUpdateProfile } from '../../services/putServices'

const FormEditPersonalData = ({ dataProfile }) => {


    const { input, onChangeInput, cleanFields } = useForm({
        name: dataProfile.user && dataProfile.user.name,
        email: dataProfile.user && dataProfile.user.email,
        cpf: dataProfile.user && dataProfile.user.cpf,
    })

    const onSubmitSignUp = (event) => {
        event.preventDefault()
        putUpdateProfile(input)
    }

    return (
        <div>
            <form onSubmit={onSubmitSignUp}>
                <TextField id="outlined-basic" label="Nome" variant="outlined"
                    required
                    value={input.name}
                    name={'name'}
                    onChange={onChangeInput}
                    placeholder='Nome e sobrenome'
                    margin={'normal'}
                    fullWidth
                />
                <TextField id="outlined-basic" label="E-mail" variant="outlined"
                    required
                    type='email'
                    value={input.email}
                    name={'email'}
                    onChange={onChangeInput}
                    placeholder='email@email.com'
                    margin={'normal'}
                    fullWidth
                />
                <TextField id="outlined-basic" label="CPF" variant="outlined"
                    required
                    value={input.cpf}
                    name={'cpf'}
                    onChange={onChangeInput}
                    placeholder='000.000.000-0'
                    margin={'normal'}
                    fullWidth
                />
                <Button variant="contained" color="primary"
                    type={'submit'}
                    fullWidth
                    margin={'normal'}
                >
                    Salvar
                </Button>
            </form>
        </div>
    )
}

export default FormEditPersonalData