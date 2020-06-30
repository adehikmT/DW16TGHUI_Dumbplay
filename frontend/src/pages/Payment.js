import React from "react"

// child compoent
import Pay from "../component/payment"
import Header from "../component/header"

const Payment = () => {
  document.title = "Payment";
    return(
        <>
        <Header/>
        <Pay/>
        </>
    )
}

export default Payment