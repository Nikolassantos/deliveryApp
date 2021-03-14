import styled from 'styled-components/native'
import colors from '../styles/theme'

export const ButtonPrimaryWrapper = styled.TouchableOpacity`
  background-color: ${colors.primaryColor};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  width: 314px;
  height: 70px;
`
export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`
