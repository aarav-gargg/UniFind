import React from 'react'
import { logoutUser } from '../../../../BackEnd/src/controller/user.controller'
import { loginUser, logoutCurrentUser } from '../../api/userService'


function LogoutButtom() {
    const handleLogout=async()=>{
        try {
            const response=await logoutCurrentUser()
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <button
    onClick={handleLogout}
    >Logout</button>
  )
}

export default LogoutButtom
