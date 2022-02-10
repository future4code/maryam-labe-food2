import React from 'react'
import { ContainerForm, InputsContainer } from './style'
import Header from '../../components/Header/Header'
import useRequestData from '../../hooks/useRequestData'
import FormEditAddress from '../../components/FormEditAddress/FormEditAddress'

const EditAddress = () => {

    const address = useRequestData({}, `/profile/address`)

    return (
        <ContainerForm>
            <Header />
            <InputsContainer>
                {address.address && <FormEditAddress address={address}/>}
            </InputsContainer>
        </ContainerForm>
    )
}

export default EditAddress