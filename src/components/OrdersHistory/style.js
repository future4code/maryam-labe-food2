import styled from "styled-components";

export const ContainerOrderHistory = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ContainerCardOrder = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    width: 20.5rem;
    margin: 0.438rem;
    padding: 8px;

    #nameRestaurant{
        width: 18.5rem;
        height: 1.125rem;
        margin: 0 0 0.563rem;
        letter-spacing: -0.39px;
        color: #e8222e;
    }

    #date{
        width: 18.5rem;
        height: 1.125rem;
        margin: 0.563rem 0 0.438rem;
        font-size: 0.75rem;
        letter-spacing: -0.29px;
        color: black;
    }

    #subtotal{
        width: 18.5rem;
        font-weight: bold;
        height: 1.125rem;
        margin: 0.438rem 0 0;
        letter-spacing: -0.39px;
        color: black;
    }
`