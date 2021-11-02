import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { putAddAdress } from '../../services/putServices'

const FormEditAddress = ({ address }) => {
    const history = useHistory()

    const { form, onChange, clear } = useForm({
        street: address.address && address.address.street,
        number: address.address && address.address.number,
        neighbourhood: address.address && address.address.neighbourhood,
        city: address.address && address.address.city,
        state: address.address && address.address.state,
        complement: address.address && address.address.complement
    })

    const onSubmitFormAdress = (event) => {
        event.preventDefault()
        putAddAdress(form, history, clear)
    }

    return (
        <div>
            <form onSubmit={onSubmitFormAdress}>
                <TextField id="outlined-basic" label="Logradouro" variant="outlined"
                    required
                    value={form.street}
                    name={'street'}
                    onChange={onChange}
                    placeholder='Rua / Av.'
                    margin={'normal'}
                    fullWidth
                />
                <TextField id="outlined-basic" label="Número" variant="outlined"
                    required
                    value={form.number}
                    name={'number'}
                    onChange={onChange}
                    placeholder='Número'
                    margin={'normal'}
                    fullWidth
                />
                <TextField id="outlined-basic" label="Complemento" variant="outlined"
                    required
                    value={form.complement}
                    name={'complement'}
                    onChange={onChange}
                    placeholder='Apto. /Bloco'
                    margin={'normal'}
                    fullWidth
                />
                <TextField id="outlined-basic" label="Bairro" variant="outlined"
                    required
                    value={form.neighbourhood}
                    name={'neighbourhood'}
                    onChange={onChange}
                    placeholder='Bairro'
                    margin={'normal'}
                    fullWidth
                />
                <TextField id="outlined-basic" label="Cidade" variant="outlined"
                    required
                    value={form.city}
                    name={'city'}
                    onChange={onChange}
                    placeholder='Cidade'
                    margin={'normal'}
                    fullWidth
                />
                <TextField id="outlined-basic" label="Estado" variant="outlined"
                    required
                    value={form.state}
                    name={'state'}
                    onChange={onChange}
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
            </form>
        </div>
    )
}

export default FormEditAddress