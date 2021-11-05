import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const useRequestData = (initialData, path) => {

    const [data, setData] = useState(initialData)

    const config = {
        method: 'get',
        url: BASE_URL + path,
        headers: { 'auth': localStorage.getItem('token') },
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axios(config)
                .then((res) => {                    
                    setData(res.data)
                })
                .catch((err) => {
                    window.alert('Erro de solicitação.')
                })
        } else {
            setData(initialData)
        }
    }, [path])

    return (data)
}

export default useRequestData