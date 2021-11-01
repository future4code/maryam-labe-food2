// import React from "react"
// import { useHistory } from "react-router-dom"

// const  history=useHistory()

export const goToHome = (history) => {
    history.push("/tela-inicial")
}
export const goToLogin = (history) => {
    history.push("/login")
}
export const goToSingUp = (history) => {
    history.push("/cadastro")
}
export const goToAdress = (history) => {
    history.push("/enredeco")
}
export const goToProfile = (history, id) => {
    history.push(`/perfil/${id}`)
}
export const goToRestaurant = (history, id) => {
    history.push(`/restaurante/${id}`)
}
export const goToCart = (history) => {
    history.push(`/carrinho`)
}
export const goToError = (history) => {
    history.push("/erro")
}