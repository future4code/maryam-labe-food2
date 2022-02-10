
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
    history.push("/endereco")
}
export const goToProfile = (history) => {
    history.push(`/perfil`)
}
export const goToEditeProfile = (history) =>{
    history.push(`/perfil/editar/`)
} 
export const goToEditAdress = (history) =>{
    history.push(`/perfil/editar-endereco`)
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