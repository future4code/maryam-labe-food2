import styled from 'styled-components'
import { backgroundColorAdress, textColor } from '../../constants/colors'

export const ContainerAdress = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    background-color: ${backgroundColorAdress};

    #adress{
        display: flex;
        flex-direction: column;
        
        #title{
            color: ${textColor};
            width: 20.5rem;
            height: 1.125rem;
            margin: 0 0 0.5rem;
            letter-spacing: -0.39px;
        }

        #adress{
            width: 20.5rem;
            margin: 0.5rem 0 0;
            letter-spacing: -0.39px;
            color: black;
        }
    }
    img{
        width: 24px;
        height: 24px;
        align-self: center;
    }

`