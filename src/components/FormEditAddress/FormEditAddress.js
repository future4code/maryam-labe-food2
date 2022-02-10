import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { putAddAdress } from '../../services/putServices'
import {goToHome} from "../../routes/coordinator"

const FormEditAddress = ({ address }) => {
    const history = useHistory()
    const [form, handleInputChange, clear] = useForm({
        street: address.address && address.address.street,
        number: address.address && address.address.number,
        neighbourhood: address.address && address.address.neighbourhood,
        city: address.address && address.address.city,
        state: address.address && address.address.state,
        complement: address.address && address.address.complement
    })
    
    const onSubmitFormAdress = (event) => {
        event.preventDefault()
        putAddAdress(form, history, clear, goToHome)
    }
    

    return (

        <div>
            {address.address && (
                <form onSubmit={onSubmitFormAdress}>
                    <TextField id="outlined-basic" label="Logradouro" variant="outlined"
                        required
                        value={form.street}
                        name={'street'}
                        onChange={handleInputChange}
                        placeholder='Rua / Av.'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="Número" variant="outlined"
                        required
                        value={form.number}
                        name={'number'}
                        onChange={handleInputChange}
                        placeholder='Número'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="Complemento" variant="outlined"
                        required
                        value={form.complement}
                        name={'complement'}
                        onChange={handleInputChange}
                        placeholder='Apto. /Bloco'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="Bairro" variant="outlined"
                        required
                        value={form.neighbourhood}
                        name={'neighbourhood'}
                        onChange={handleInputChange}
                        placeholder='Bairro'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="Cidade" variant="outlined"
                        required
                        value={form.city}
                        name={'city'}
                        onChange={handleInputChange}
                        placeholder='Cidade'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="Estado" variant="outlined"
                        required
                        value={form.state}
                        name={'state'}
                        onChange={handleInputChange}
                        placeholder='Estado'
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
                </form>)}
        </div>
    )
}

export default FormEditAddress