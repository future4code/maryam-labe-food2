import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { ContainerOrderHistory, ContainerCardOrder } from './style'

const convertMonth = (month) => {
    switch (month) {
        case 1:
            return "Janeiro"
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4:
            return "Abril"
        case 5:
            return "Maio"
        case 6:
            return "Junho"
        case 7:
            return "Julho"
        case 8:
            return "Agosto"
        case 9:
            return "Setembro"
        case 10:
            return "Outubro"
        case 11:
            return "Novembro"
        case 12:
            return "Dezembro"
        default:
            return "Error"
    }
}

const OrdersHistory = () => {

    const orderHistory = useRequestData([], "/orders/history")

    const convertDate = (dateOfOrder) => {
        const date = new Date(dateOfOrder)
        return `${date.getDate()} de ${convertMonth(date.getMonth() + 1)} de ${date.getFullYear()}`
    }

    const allOrder = orderHistory.orders?.map((order, index) => {
        const date = convertDate(order.createdAt)
        return (
            <ContainerCardOrder key={index}>
                <p id={"nameRestaurant"}>{order.restaurantName}</p>
                <p id={"date"}>{date}</p>
                <p id={"subtotal"}>SUBTOTAL: R$ {order.totalPrice.toFixed(2).replace(".", ",")}</p>
            </ContainerCardOrder>
        )
    })

    return (
        <ContainerOrderHistory>
            {orderHistory.orders ? <div>{allOrder}</div> : <p>Você não realizou nenhum pedido</p>}
        </ContainerOrderHistory>
    )
}

export default OrdersHistory