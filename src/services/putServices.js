import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToHome } from '../routes/coordinator'

export const putAddAdress = ( body,history,cleanFields) => {
    const config = {
        method: 'put',
        url: BASE_URL + "/address",
        headers: { 'auth': localStorage.getItem('token') },
        data: body,
    }

    axios(config)
        .then((res) => {
            localStorage.setItem('token',res.data.token)
            goToHome(history)
            cleanFields()
        })
        .catch((err) => {
            window.alert(err.response.data.message)
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