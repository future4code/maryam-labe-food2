import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import OrdersHistory from '../../components/OrdersHistory/OrdersHistory'
import PersonalData from '../../components/PersonalData/PersonalData'
import UserAdress from '../../components/UserAdress/UserAdress'
import { goToLogin } from '../../routes/coordinator'
import { ContainerProfile } from './style'

const ProfilePage = () => {
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
        goToLogin(history)
    }
    
    return(
        <div>
            <Header/>
            <ContainerProfile>
                <PersonalData />
                <UserAdress/>
                <p>Histórico de Pedidos</p>
                <hr/>
                <OrdersHistory/>
                <Button
                    variant="contained" 
                    color="primary"
                    type={'submit'}
                    fullWidth
                    margin={'normal'}
                    onClick={()=>logout()}
                >
                    Logout
                </Button>
            </ContainerProfile>
            <Footer/>
        </div>
    )
}

export default ProfilePage