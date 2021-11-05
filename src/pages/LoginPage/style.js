import styled from "styled-components"
import { primaryColor } from "../../constants/colors"


export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100vw; 
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const SignUpButtonContainer = styled.div`
  width: 90vw;
  max-width: 450px;
  font-family: Roboto;
  font-size: 16px;
  text-align: center; 

`

export const LogoImage = styled.img`
  width: 104px;
  height: 58px;
  margin: 90px 128px 16px;
  object-fit: contain;
`

export const ContainerErrorMsg = styled.div`
  color: ${primaryColor};  
`

