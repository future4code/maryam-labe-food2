import React from "react"
import { useHistory } from "react-router-dom"

const  history=useHistory()

export const goToHome = () => {
    history.push("/tela-inicial")
}
export const goToLogin = () => {
    history.push("/login")
}
export const goToSingUp = () => {
    history.push("/cadastro")
}
export const goToAdress = () => {
    history.push("/enredeco")
}
export const goToProfile = (id) => {
    history.push(`/perfil/${id}`)
}
export const goToRestaurant = (id) => {
    history.push(`/restaurante/${id}`)
}
export const goToCart = () => {
    history.push(`/carrinho`)
}
export const goToError = () => {
    history.push("/erro")
}