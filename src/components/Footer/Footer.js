import avatarGreen from '../../assets/avatarGreen.png'
import avatarWhite from '../../assets/avatarWhite.png'
import homepageGreen from '../../assets/homepageGreen.png'
import homepageWhite from '../../assets/homepageWhite.png'
import shoppingCartGreen from '../../assets/shoppingCartGreen.png'
import shoppingCartWhite from '../../assets/shoppingCartWhite.png'
import React from 'react'
import { useHistory } from 'react-router'
import { goToHome, goToProfile, goToCart } from '../../routes/coordinator'
import { Container, ContainerFooter } from './style'
import ActiveOrder from '../ActiveOrder/ActiveOrder'

const Footer = () => {
    const history = useHistory()

    return (
        <Container>
            {history.location.pathname === "/restaurante" && <ActiveOrder />}
            <ContainerFooter>
                <img src={history.location.pathname === "/tela-inicial" ? homepageGreen : homepageWhite} alt={"Icone Página Inicial"} onClick={() => goToHome(history)} />
                <img src={history.location.pathname === "/carrinho" ? shoppingCartGreen : shoppingCartWhite} alt={"Icone Carrinho"} onClick={() => goToCart(history)} />
                <img src={history.location.pathname === "/perfil" ? avatarGreen : avatarWhite} alt={"Icone Perfil"} onClick={() => goToProfile(history)} />
            </ContainerFooter>
        </Container>
    )
}

export default Footer