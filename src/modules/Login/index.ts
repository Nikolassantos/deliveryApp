import { createElement } from 'react'
import { IViewProps } from './types'
import Login from './view'

export default function LoginContainer() {
  const viewProps: IViewProps = {}

  return createElement(Login, viewProps)
}
