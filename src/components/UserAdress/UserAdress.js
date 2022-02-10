import React from 'react'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import { goToEditAdress } from '../../routes/coordinator'
import editPen from '../../assets/editPen.png'
import { ContainerAdress } from './style'
import Loading from '../Loading/Loading'
import useRequestData from '../../hooks/useRequestData'

const UserAdress = () => {
    const history = useHistory()
    useProtectedPage()

    const address = useRequestData({}, `/profile/address`)

    return (
        <div>
            {address.address ? <ContainerAdress>
                <div id={"adress"}>
                    <p id={"title"}>Endereço cadastrado</p>
                    <p id={"adress"}>{`${address.address.street}, ${address.address.number}, ${address.address.complement}, ${address.address.neighbourhood} 
                    ${address.address.city}-${address.address.state} `}</p>
                </div>
                <img src={editPen} alt={"Caneta de editar"} onClick={() => { goToEditAdress(history) }} />
            </ContainerAdress> : <Loading />}
        </div>
    )
}

export default UserAdress