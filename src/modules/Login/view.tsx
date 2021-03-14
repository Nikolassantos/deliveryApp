import React from 'react'
import { ButtonWrapper, LoginWrapper, Section } from './styles'
import ButtonPrimary from '../shared/ButtonPrimary'
import ScreenWrapper from '../ScreenWrapper'

const Login: React.FC = () => {
  return (
    <ScreenWrapper>
      <LoginWrapper>
        <ButtonWrapper>{/* <ButtonPrimary label="Login" /> */}</ButtonWrapper>
      </LoginWrapper>
    </ScreenWrapper>
  )
}

export default Login
