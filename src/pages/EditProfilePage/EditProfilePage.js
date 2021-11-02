import React from 'react'
import { ContainerForm, InputsContainer } from './style'
import Header from '../../components/Header/Header'
import useRequestData from '../../hooks/useRequestData'
import FormEditPersonalData from '../../components/FormEditPersonalData/FormEditPersonalData'

const EditeProfile = () => {

    const dataProfile = useRequestData([], "/profile")

    return (
        <div>
            <Header />
            <ContainerForm>
                <InputsContainer>
                    {dataProfile.user && <FormEditPersonalData dataProfile={dataProfile} />}
                </InputsContainer>
            </ContainerForm>
        </div>
    )
}

export default EditeProfile