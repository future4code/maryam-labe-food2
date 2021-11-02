import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const ContainerActiveOrder = styled.div`
    display: flex;
    background-color: ${primaryColor};
    align-items: center;

    img{
        width: 2rem;
        height: 2rem;
        margin: 0.125rem 1.5rem 0 1.5em;
        object-fit: contain;
    }

    #title{
        color: white
    }

    #price{
        font-weight: bold;
    }

`