import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToRestaurant } from '../routes/coordinator'

const MainCard = styled.div`
    width: 20.5rem;
    height: 11.75rem;
    padding: 0 0 1rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`

const ImgCard = styled.img`
    width: 20.5rem;
    height: 7.5rem;
    margin: 0 0 0.75rem;
    object-fit: contain;
`

const RestauranteNome = styled.span`
    width: 18.5rem;
    height: 1.125rem;
    margin: 0.75rem 1rem 0.25rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
`

const RestauranteTempo = styled.span`
    width: 9.25rem;
    height: 1.125rem;
    margin: 0.25rem 0.5rem 0 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`

const RestauranteFrete = styled.span`
    width: 8.75rem;
    height: 1.125rem;
    margin: 0.25rem 1rem 0 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #b8b8b8;
`

const ContainerFrete = styled.div`
    display: flex;
    justify-content: space-between;
`

const RestauranteCard = styled.div`
    width: 22.5rem;
    height: 12.25rem;
    margin: 3.125rem 0 0;
    padding: 0.5rem 1rem 0;
`

const ContainerNome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
function CardHome (props) {
    const history = useHistory()
    return(
        <RestauranteCard>
            <MainCard onClick={() => goToRestaurant(history, props.restaurante.id)}>
                <ImgCard src={props.restaurante.logoUrl} />
                <ContainerNome>
                    <RestauranteNome>{props.restaurante.name}</RestauranteNome>
                    <ContainerFrete>
                        <RestauranteTempo>{props.restaurante.deliveryTime} min</RestauranteTempo>
                        <RestauranteFrete>Frete R${props.restaurante.shipping},00</RestauranteFrete>
                    </ContainerFrete>
                </ContainerNome>
            </MainCard>
        </RestauranteCard>
    )
}

export default CardHome