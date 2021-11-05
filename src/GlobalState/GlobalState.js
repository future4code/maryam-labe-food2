import React, {useState} from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import { BASE_URL } from '../constants/urls'
import axios from 'axios'

const GlobalState = (props) =>{

    const[activeOrder, setActiveOrder] = useState({})
    const[dataProfile, setDataProfile] = useState({})
    const [cart, setCart] = useState([])
    const [cartId, setCartId] = useState([])
    const [shipping, setShipping] = useState([])
    const [shippingId, setShippingId] = useState([])
    const [isActiveOrder, setIsActiveOrder] = useState(false)

    const getDataProfile = () => {
        axios.get(`${BASE_URL}/profile`, {headers:{
            'auth': localStorage.getItem('token')
        }})
        .then((res) => {
            setDataProfile(res.data)
        })
        .catch((err) => {
            window.alert('Erro de solicitação.')
        })
    }

    const getActiveOrder = () => {
        axios.get(`${BASE_URL}/active-order`, {headers:{
            'auth': localStorage.getItem('token')
        }})
        .then((res) => {
                setActiveOrder(res.data)
        })
        .catch((err) => {
            window.alert('Erro de solicitação.')
        })
    }

    return(
        <GlobalStateContext.Provider value={{dataProfile, getDataProfile, activeOrder, getActiveOrder, cart, setCart, cartId, setCartId, shipping, setShipping, shippingId, setShippingId, isActiveOrder, setIsActiveOrder}}>
                {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState