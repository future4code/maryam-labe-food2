import styled from 'styled-components'

export const ContainerPersonalData = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding: 5px;

    #personalData{
        display: flex;
        justify-content: space-between;
        align-items: center;

        #name{
            height:  0.95rem;
            letter-spacing: -0.39px;
        }

        #email{
            height: 0.95rem;
            letter-spacing: -0.39px
        }

        #cpf{
            height:  0.95rem;
            letter-spacing: -0.39px;
        }
        
        img{
            width: 24px;
            height: 24px;
            align-self: flex-start;
        }

    }

`