import React from 'react'
import { useNavigate } from 'react-router-dom'
type PrivateRouterProps = {
    children : JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
  const navigate = useNavigate()
  const data = localStorage.getItem('token')
return props.children
}

export default PrivateRouter