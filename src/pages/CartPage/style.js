import styled from "styled-components"
import { backgroundColorAdress } from '../../constants/colors'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100vw; 
  max-width: 100%;
`

export const AlignAddress = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 3.3rem;
    margin-left: 0.4rem;
    background-color: ${backgroundColorAdress};
    width: 100vw; 
    max-width: 100%;
`

export const Title = styled.div `
    color: grey;
`

export const Shipping = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-self: flex-end;
    margin-right: 0.5rem;
`

export const Total = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95vw;
    max-width: 95%;

    b {
        color: #5CB646;
    }
`

export const Payment = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 95vw;
    max-width: 95%;
    color: "#000000";

    hr {
        color: black;
        border: 1px solid black;
        margin-top: 0;
        width: 95vw;
    }
`

export const AlignConfirm = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95vw;
    margin-bottom: 10vh;
`

