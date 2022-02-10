import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import OrdersHistory from '../../components/OrdersHistory/OrdersHistory'
import PersonalData from '../../components/PersonalData/PersonalData'
import UserAdress from '../../components/UserAdress/UserAdress'
import { goToLogin } from '../../routes/coordinator'
import { ContainerProfile, AlignConfirm } from './style'
import { withStyles } from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
      padding: '0.7rem',
      marginTop: '0.7rem',
      marginBottom: '1rem'
    }
  })(Button)

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
                <AlignConfirm>
                <StyledButton
                    variant="contained" 
                    color="primary"
                    type={'submit'}
                    fullWidth
                    margin={'normal'}
                    onClick={()=>logout()}
                >
                    Logout
                </StyledButton>
                </AlignConfirm>
            </ContainerProfile>
            <Footer/>
        </div>
    )
}

export default ProfilePage