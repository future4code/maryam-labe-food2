import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import editPen from '../../assets/editPen.png'
import { goToEditeProfile } from '../../routes/coordinator'
import { useHistory } from 'react-router'
import { ContainerPersonalData } from './style'
import Loading from '../Loading/Loading'
import useRequestData from '../../hooks/useRequestData'


const PersonalData = () => {
    useProtectedPage()
    const history = useHistory()

    const dataProfile = useRequestData([], "/profile")

    return (
        <ContainerPersonalData>
            {dataProfile.user ? <div>
                <div id={"personalData"}>
                    <div>
                        <p id={"name"}>{dataProfile.user.name}</p>
                        <p id={"email"}>{dataProfile.user.email}</p>
                        <p id={"cpf"}>{dataProfile.user.cpf}</p>
                    </div>
                    <img src={editPen} alt={"Caneta de editar"} onClick={() => goToEditeProfile(history)} />
                </div>
            </div> : <Loading />}
        </ContainerPersonalData>
    )
}

export default PersonalData

