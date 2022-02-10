import React, { useContext } from 'react'
import { GlobalStateContext } from '../../GlobalState/GlobalStateContext'
import clock from '../../assets/clock.png'
import { ContainerActiveOrder } from './style'
import { goToHome } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const ActiveOrder = () => {
    const history = useHistory()
    const {activeOrder, getActiveOrder, isActiveOrder, setIsActiveOrder} = useContext(GlobalStateContext)
    getActiveOrder()

    setTimeout(()=>{
        setIsActiveOrder(false)
        goToHome(history)
    },5000)


    return(
        <div>
            {(activeOrder.order !== null && activeOrder.order !== undefined) &&
            (<ContainerActiveOrder>
                <img src={clock} alt={"relogio de tempo"}/>
                <div>
                    <p id={"title"}>Pedido em andamento</p>
                    <p>{activeOrder.order.restaurantName}</p>
                    <p id={"price"}>SUBTOTAL: R${activeOrder.order.totalPrice.toFixed(2)}</p>
                </div>
            </ContainerActiveOrder>)}
        </div>
    )
}

export default ActiveOrder