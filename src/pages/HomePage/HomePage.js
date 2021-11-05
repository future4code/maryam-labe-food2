import React, { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { HeaderTitle, InputPesquisaRestaurante, Filtros, ContainerFeed, Lupa, InputFiltro, FiltrosConainer, FiltrosOff, FiltrosOn, MainHome, TextoVazio } from "./style"
import CardHome from "../../components/CardHome/CardHome"
import lupa from '../../assets/search.svg'
import useForm from '../../hooks/useForm'
import Footer from '../../components/Footer/Footer'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from "../../components/Header/Header"
import ActiveOrder from "../../components/ActiveOrder/ActiveOrder"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import Loading from "../../components/Loading/Loading"
import { Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"



const HomePage = () => {
    useProtectedPage()

    const [restaurantes, setRestaurantes] = useState([])
    const [todosRestaurantes, setTodosRestaurantes] = useState([])
    const [flagRestaurantes, setFlagRestaurantes] = useState(false)
    const [burguerFilter, setBurguerFilter] = useState(false)
    const [asiaticaFilter, setAsiaticaFilter] = useState(false)
    const [massaFilter, setMassaFilter] = useState(false)
    const [saudaveisFilter, setSaudaveisFilter] = useState(false)
    const [arabeFilter, setArabeFilter] = useState(false)
    const [sorvetesFilter, setSorvetesFilter] = useState(false)
    const [carnesFilter, setCarnesFilter] = useState(false)
    const [baianaFilter, setBaianaFilter] = useState(false)
    const [petiscosFilter, setPetiscosFilter] = useState(false)
    const [mexicanaFilter, setMexicanaFilter] = useState(false)
    const [form, onChange, clear] = useForm({name:''})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const headers = {
            headers: {
                auth: window.localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }

        setIsLoading(true)

        axios.get(`${BASE_URL}/restaurants`, headers)
            .then((res) => {
                setRestaurantes(res.data.restaurants)
                setTodosRestaurantes(res.data.restaurants)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err.data)
            })
    }, [flagRestaurantes])


    const filtrosBotoes = (filtro, desliga) => {

        if (filtro === 'burguer') {
            setBurguerFilter(!burguerFilter)
            setAsiaticaFilter(false)
            setSaudaveisFilter(false)
            setMassaFilter(false)
            setArabeFilter(false)
            setSorvetesFilter(false)
            setCarnesFilter(false)
            setBaianaFilter(false)
            setPetiscosFilter(false)
            setMexicanaFilter(false)


            const listaFiltrada = todosRestaurantes && todosRestaurantes.filter((restaurante) => {
                return (restaurante.category === 'Hamburguer')
            })

            setRestaurantes(listaFiltrada)
        } else if (filtro === 'asiatica') {
            setAsiaticaFilter(!asiaticaFilter)
            setBurguerFilter(false)
            setSaudaveisFilter(false)
            setMassaFilter(false)
            setArabeFilter(false)
            setSorvetesFilter(false)
            setCarnesFilter(false)
            setBaianaFilter(false)
            setPetiscosFilter(false)
            setMexicanaFilter(false)


            const listaFiltrada = todosRestaurantes && todosRestaurantes.filter((restaurante) => {
                return (restaurante.category === 'Asiática')
            })

            setRestaurantes(listaFiltrada)
        } else if (filtro === 'massa') {
            setMassaFilter(!massaFilter)
            setBurguerFilter(false)
            setSaudaveisFilter(false)
            setAsiaticaFilter(false)
            setArabeFilter(false)
            setSorvetesFilter(false)
            setCarnesFilter(false)
            setBaianaFilter(false)
            setPetiscosFilter(false)
            setMexicanaFilter(false)


            const listaFiltrada = todosRestaurantes && todosRestaurantes.filter((restaurante) => {
                return (restaurante.category === 'Italiana')
            })

            setRestaurantes(listaFiltrada)
        } else if (filtro === 'saudavel') {
            setSaudaveisFilter(!saudaveisFilter)
            setBurguerFilter(false)
            setMassaFilter(false)
            setAsiaticaFilter(false)
            setArabeFilter(false)
            setSorvetesFilter(false)
            setCarnesFilter(false)
            setBaianaFilter(false)
            setPetiscosFilter(false)
            setMexicanaFilter(false)


            const listaFiltrada = todosRestaurantes && todosRestaurantes.filter((restaurante) => {
                return (restaurante.category === 'Saudável')
            })

            setRestaurantes(listaFiltrada)
        } else if (filtro === 'arabe') {
            setArabeFilter(!arabeFilter)
            setBurguerFilter(false)
            setMassaFilter(false)
            setAsiaticaFilter(false)
            setSaudaveisFilter(false)
            setSorvetesFilter(false)
            setCarnesFilter(false)
            setBaianaFilter(false)
            setPetiscosFilter(false)
            setMexicanaFilter(false)


            const listaFiltrada = todosRestaurantes && todosRestaurantes.filter((restaurante) => {
                return (restaurante.category === 'Árabe')
            })

            setRestaurantes(listaFiltrada)
        } else if (filtro === 'sorvete') {
            setSorvetesFilter(!sorvetesFilter)
            setBurguerFilter(false)
            setMassaFilter(false)
            setAsiaticaFilter(false)
            setSaudaveisFilter(false)
            setArabeFilter(false)
            setCarnesFilter(false)
            setBaianaFilter(false)
            setPetiscosFilter(false)
            setMexicanaFilter(false)

            const listaFiltrada = todosRestaurantes && todosRestaurantes.filter((restaurante) => {
                return (restaurante.category === 'Sorvetes')
            })

            setRestaurantes(listaFiltrada)
        } else if (filtro === 'carnes') {
            setCarnesFilter(!carnesFilter)
            setBurguerFilter(false)
            setMassaFilter(false)
            setAsiaticaFilter(false)
            setSaudaveisFilter(false)
            setArabeFilter(false)
            setSorvetesFilter(false)
            setBaianaFilter(false)
            setPetiscosFilter(false)
            setMexicanaFilter(false)

            const listaFiltrada = todosRestaurantes && todosRestaurantes.filter((restaurante) => {
                return (restaurante.category === 'Carnes')
            })

            setRestaurantes(listaFiltrada)
        } else if (filtro === 'baiana') {
            setBaianaFilter(!baianaFilter)
            setBurguerFilter(false)
            setMassaFilter(false)
            setAsiaticaFilter(false)
            setSaudaveisFilter(false)
            setArabeFilter(false)
            setSorvetesFilter(false)
            setCarnesFilter(false)
            setPetiscosFilter(false)
            setMexicanaFilter(false)

            const listaFiltrada = todosRestaurantes && todosRestaurantes.filter((restaurante) => {
                return (restaurante.category === 'Baiana')
            })

            setRestaurantes(listaFiltrada)
        } else if (filtro === 'petiscos') {
            setPetiscosFilter(!petiscosFilter)
            setBurguerFilter(false)
            setMassaFilter(false)
            setAsiaticaFilter(false)
            setSaudaveisFilter(false)
            setArabeFilter(false)
            setSorvetesFilter(false)
            setCarnesFilter(false)
            setBaianaFilter(false)
            setMexicanaFilter(false)

            const listaFiltrada = todosRestaurantes && todosRestaurantes.filter((restaurante) => {
                return (restaurante.category === 'Petiscos')
            })

            setRestaurantes(listaFiltrada)
        } else if (filtro === 'mexicana') {
            setMexicanaFilter(!mexicanaFilter)
            setBurguerFilter(false)
            setMassaFilter(false)
            setAsiaticaFilter(false)
            setSaudaveisFilter(false)
            setArabeFilter(false)
            setSorvetesFilter(false)
            setCarnesFilter(false)
            setBaianaFilter(false)
            setPetiscosFilter(false)

            const listaFiltrada = todosRestaurantes && todosRestaurantes.filter((restaurante) => {
                return (restaurante.category === 'Mexicana')
            })

            setRestaurantes(listaFiltrada)
        }

        if (desliga) {
            setFlagRestaurantes(!flagRestaurantes)
        }
    }

    const filtroPorNome = (e) => {
        e.preventDefault()

        let elementosFiltrados = []
        const arrayDeBusca = form.name.toUpperCase().split(' ')

        todosRestaurantes.map((restaurante) => {
            let arrayDoRestaurante = restaurante.name.split(' ')
            arrayDoRestaurante.filter((palavra) => {
                if (arrayDeBusca.indexOf(palavra.toUpperCase()) !== -1) {
                    elementosFiltrados.push(restaurante)
                }
            })
        })

        setRestaurantes(elementosFiltrados)
        clear()
    }

    const RenderizaCards = restaurantes && restaurantes.map((restaurante) => {
        return (
            <CardHome restaurante={restaurante} />
        )
    })


    return (
        <MainHome>
            <Header />
            <HeaderTitle>
                {/* <span>FutureEats</span> */}
            </HeaderTitle>
            <FiltrosConainer>
                <InputPesquisaRestaurante onSubmit={filtroPorNome} >
                    <button><Lupa src={lupa} alt='Lupa pesquisar' /></button>
                    <InputFiltro placeholder='Restaurante' name={"name"} value={form.name} onChange={onChange} required type={"text"} />
                </ InputPesquisaRestaurante>
                <Filtros>
                    {(burguerFilter) ? (<FiltrosOn onClick={() => filtrosBotoes('burguer', true)} >Burguer</FiltrosOn>) : (<FiltrosOff onClick={() => filtrosBotoes('burguer', false)} >Burguer</FiltrosOff>)}
                    {(asiaticaFilter) ? (<FiltrosOn onClick={() => filtrosBotoes('asiatica', true)} >Asiática</FiltrosOn>) : (<FiltrosOff onClick={() => filtrosBotoes('asiatica', false)} >Asiática</FiltrosOff>)}
                    {(massaFilter) ? (<FiltrosOn onClick={() => filtrosBotoes('massa', true)} >Massa</FiltrosOn>) : (<FiltrosOff onClick={() => filtrosBotoes('massa', false)} >Massa</FiltrosOff>)}
                    {(saudaveisFilter) ? (<FiltrosOn onClick={() => filtrosBotoes('saudavel', true)} >Saudáveis</FiltrosOn>) : (<FiltrosOff onClick={() => filtrosBotoes('saudavel', false)} >Saudáveis</FiltrosOff>)}
                    {(arabeFilter) ? (<FiltrosOn onClick={() => filtrosBotoes('arabe', true)} >Árabe</FiltrosOn>) : (<FiltrosOff onClick={() => filtrosBotoes('arabe', false)} >Árabe</FiltrosOff>)}
                    {(sorvetesFilter) ? (<FiltrosOn onClick={() => filtrosBotoes('sorvete', true)} >Sorvetes</FiltrosOn>) : (<FiltrosOff onClick={() => filtrosBotoes('sorvete', false)} >Sorvetes</FiltrosOff>)}
                    {(carnesFilter) ? (<FiltrosOn onClick={() => filtrosBotoes('carnes', true)} >Carnes</FiltrosOn>) : (<FiltrosOff onClick={() => filtrosBotoes('carnes', false)} >Carnes</FiltrosOff>)}
                    {(baianaFilter) ? (<FiltrosOn onClick={() => filtrosBotoes('baiana', true)} >Baiana</FiltrosOn>) : (<FiltrosOff onClick={() => filtrosBotoes('baiana', false)} >Baiana</FiltrosOff>)}
                    {(petiscosFilter) ? (<FiltrosOn onClick={() => filtrosBotoes('petiscos', true)} >Petiscos</FiltrosOn>) : (<FiltrosOff onClick={() => filtrosBotoes('petiscos', false)} >Petiscos</FiltrosOff>)}
                    {(mexicanaFilter) ? (<FiltrosOn onClick={() => filtrosBotoes('mexicana', true)} >Mexicana</FiltrosOn>) : (<FiltrosOff onClick={() => filtrosBotoes('mexicana', false)} >Mexicana</FiltrosOff>)}
                </Filtros>
            </FiltrosConainer>
            <ContainerFeed>
                {isLoading ? <Loading /> : RenderizaCards}
                {restaurantes.length === 0 && <TextoVazio>
                    <Typography
                        color={"neutral"}
                        variant={"h1"}
                        align={"center"}
                        gutterBottom={true}
                    >
                        <strong>Ops!</strong>
                    </Typography>
                    <Typography
                        color={"neutral"}
                        variant={"overline"}
                        align={"center"}
                        gutterBottom={true}
                    >
                        Não encontramos nada por aqui!
                    </Typography>
                    <Typography
                        color={"neutral"}
                        variant={"body1"}
                        align={"center"}
                        gutterBottom={true}
                    >
                        Revise os filtros ativados ou tente novamente.
                    </Typography>
                    <div>
                        <Button
                            fullWidth
                            variant={"contained"}
                            color={"primary"}
                            onClick={() => window.location.reload()}
                        >
                            Voltar para a página Inicial
                        </Button>
                    </div>
                </TextoVazio>}
            </ContainerFeed>
            <Footer />
        </MainHome>
    )
}

export default HomePage