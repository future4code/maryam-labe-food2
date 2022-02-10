import styled from "styled-components"

export const HeaderTitle = styled.div`
    width: 10.938rem;
    height: 2.75rem;
    margin: 1.25rem 5.75rem 0 5.813rem;
    padding: 0.813rem 4.063rem 0.75rem;

    span{
        width: 2.813rem;
        height: 1.188rem;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: var black;
    }
`

export const InputPesquisaRestaurante = styled.form`
    width: 328px;
    height: 56px;
    padding: 16px 8px 16px 17px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    display: flex;
    align-items: center;

    button{
        border: none;
        background-color: transparent;
        width: 25px;
        height: 25px;
        padding: 0;
    }
`

export const Filtros = styled.div`
    display: flex;
    width: 22.5rem;
    height: 2.625rem;
    margin: 0.5rem 0 0;
    padding: 0.75rem 0 0.75rem 1rem;
    overflow-x: scroll;
`

export const FiltrosOff = styled.span`
    width: 5.438rem;
    height: 1.125rem;
    margin: 0 0.5rem 0 0;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    padding-left: 4px;
    padding-right: 4px;
`

export const FiltrosOn = styled.span`
    width: 5.438rem;
    height: 1.125rem;
    margin: 0 0.5rem 0 0;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #5cb646;
`

export const ContainerFeed= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Lupa = styled.img`
    width: 24px;
    height: 24px;
    margin: 0 15.3px 0 0;
    object-fit: contain;
`

export const InputFiltro = styled.input`
    width: 263.6px;
    height: 18px;
    margin: 3px 0 3px 15.3px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #d0d0d0;
    border: none;
`

export const FiltrosConainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainHome = styled.div`
    margin-bottom: 80px;
`

export const TextoVazio = styled.div`        
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  max-width: 400px;
    
    button { 
        margin-top: 15vh;
    }

`

