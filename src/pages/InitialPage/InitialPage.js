import React from "react"
import { useHistory } from 'react-router'
import { goToLogin } from '../../routes/coordinator'
import { Container, PulseButton } from './style'

const InitialPage = () => {
    const history = useHistory()

    setTimeout(()=>{
        goToLogin(history)
    },3000)

    return (
            <Container>
                <PulseButton />
            </Container> 
    )
}

export default InitialPage