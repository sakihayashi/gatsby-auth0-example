import React from "react"
import { handleAuthentication } from "../utils/auth"

const Callback = () => {
  console.log('handleAuthentication: ', handleAuthentication());
  
  handleAuthentication()

  return <p>Loading...</p>
}

export default Callback