import  { use } from 'react'
import { Authcontext } from '../contextapi/Authcontext'
import { Navigate, useLocation } from 'react-router'

const Privateroute = ({children}) => {
    const{user, loader} = use(Authcontext)
    const location = useLocation()
    if(loader){
        return
    }
    if(user){
        return children
    }
  return (
    <Navigate state={location?.pathname} to={'/login'}></Navigate>
  )
}

export default Privateroute