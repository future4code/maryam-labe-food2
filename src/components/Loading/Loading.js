import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Container } from './style'

const Loading = () => {
    return (
        <Container>
            <CircularProgress />
        </Container>
    )
}

export default Loading