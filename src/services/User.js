import { BASE_URL } from '../constants/urls'
import axios from 'axios'
import { goToAdress } from '../routes/coordinator'

export const signUp = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios
        .post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            window.alert("Cadastro efetuado com sucesso!")
            clear()
            setIsLoading(false)
            goToAdress(history)
        })
        .catch((err) => {
            setIsLoading(false)
            window.alert(err.response.data.message)
        })
}