import React from 'react'
import { useHistory } from 'react-router-dom'
import back from '../../assets/back.png'
import { ContainerHeader } from './style'

const Header = () => {
    const history = useHistory()

    const goBackPage = () => {
        history.goBack()
    }

    const page = () => {
        if (history.location.pathname === "/cadastro") {
            return "Cadastrar"
        } else if (history.location.pathname === "/cadastro-endereco" || history.location.pathname === "/perfil/editar-endereco") {
            return "Meu Endereço"
        } else if (history.location.pathname === "/tela-inicial") {
            return "FutureEats"
        } else if (history.location.pathname.includes("/restaurante/")) {
            return "Restaurante"
        } else if (history.location.pathname === "/perfil") {
            return "Meu Perfil"
        } else if (history.location.pathname.includes("/perfil/editar/")) {
            return "Editar"
        } else if (history.location.pathname === "/carrinho") {
            return "Meu Carrinho"
        } else if (history.location.pathname === "/restaurantes/busca") {
            return "Busca"
        }
    }

    return (
        <ContainerHeader>
            {history.location.pathname === "/cadastro-endereco" || history.location.pathname === "/perfil/editar-endereco"
                || history.location.pathname.includes("/perfil/editar/") || history.location.pathname === "/cadastro" || history.location.pathname.includes("/restaurante/")
                || history.location.pathname === "/restaurantes/busca" ? <img src={back} alt={"Botão Voltar"} onClick={goBackPage} /> : <div></div>}
            {<p>{page()}</p>}
            <div></div>
        </ContainerHeader>
    )
}

export default Header