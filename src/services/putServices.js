import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToProfile } from '../routes/coordinator'

export const putAddAdress = ( body, cleanFields, history, setIsLoading) => {
    const config = {
        method: 'put',
        url: BASE_URL + "/address",
        headers: { 'auth': localStorage.getItem('token') },
        data: body,
    }
    setIsLoading(true)
    axios(config)
        .then((res) => {
            localStorage.setItem('token',res.data.token)
            window.alert("Seu enderço foi salvo!")
            cleanFields()
            setIsLoading(false)
            goToProfile(history)
        })
        .catch((err) => {
            setIsLoading(false)
            window.alert(err.data.message)
        })

}

export const putUpdateProfile = (body) => {
    const config = {
        method: 'put',
        url: BASE_URL + "/profile",
        headers: { 'auth': localStorage.getItem('token') },
        data: body,
    }

    axios(config)
        .then((res) => {
            window.alert("Dados do Perfil atualizado com sucesso")
        })
        .catch((err) => {
            window.alert(err.response.data.message)
        })
}