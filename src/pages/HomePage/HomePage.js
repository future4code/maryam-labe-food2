import React, { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { HeaderTitle, InputPesquisaRestaurante, Filtros, ContainerFeed } from "./style"
import CardHome from "../../components/CardHome"

const HomePage = () => {
    const [restaurantes, setRestaurantes] = useState([])
    const [filtrosON, setFiltrosOn] = useState(false)
    
    useEffect(() => {
        const headers = {
            headers:{
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklHUFhpNTNLazZ4WUpoYUNqYWx0IiwibmFtZSI6IlNpbHZpbyIsImVtYWlsIjoic2lsdmlvcmRqckBvdXRsb29rLmNvbSIsImNwZiI6IjAyNS42NDAuNjcxLTU4IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IkF2ZW5pZGEgRGVzZW1iYXJnYWRvciBWYWxlbnRlIGRlIExpbWEsIDIwMCwgMTAxIC0gSmF0acO6Y2EiLCJpYXQiOjE2MzU3OTE5NTZ9.EPdWUAwnbGNVZVb6yE6Mu2O3Ci3k24FqnQDrzCG37nQ',
                'Content-Type':'application/json'
            }
        }

        axios.get(`${BASE_URL}/restaurants`, headers)
        .then((res) => {
            setRestaurantes(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err.data)
        })
    }, [])

    console.log(restaurantes)

    const RenderizaCards = restaurantes && restaurantes.map((restaurante) => {
        return(
            <CardHome restaurante={restaurante} />
        )
    })
    return (
        <div>
            <HeaderTitle>
                <span>FutureEats</span>
            </HeaderTitle>
            <div>
                <InputPesquisaRestaurante placeholder='Restaurante' />
                <Filtros>
                    <span>Burguer</span>
                    <span>Asiática</span>
                    <span>Massa</span>
                    <span>Saudáveis</span>
                </Filtros>
            </div>
            <ContainerFeed>
                {RenderizaCards}
            </ContainerFeed>
        </div>
    )
}

export default HomePage