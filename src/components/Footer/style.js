import styled from 'styled-components'
import { borderColor } from '../../constants/colors'

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
`

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid ${borderColor};
    height: 8vh;
    width: 100vw;
    
    img{
        width: 36px;
        height: 36px;
    }
`