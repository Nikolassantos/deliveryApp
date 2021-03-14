import React from 'react'
import { ButtonPrimaryWrapper, TextButton } from './styles'
import { IButtonPrimaryProps } from './types'

const ButtonPrimary: React.FC<IButtonPrimaryProps> = ({ label }) => {
  return (
    <ButtonPrimaryWrapper>
      <TextButton>{label}</TextButton>
    </ButtonPrimaryWrapper>
  )
}

export default ButtonPrimary
