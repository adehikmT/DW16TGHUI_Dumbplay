import React, { useState } from "react";
// child compoent
import Pay from "../component/payment";
import Header from "../component/header";
import LodBars from "../component/loader/Bars";

const Payment = () => {
  document.title = "Payment";
  const [loadPage, setLoadPage] = useState(true);
  setTimeout(() => {
    setLoadPage(false);
  }, 3000);

  return (
    <>
      {loadPage ? (
        <LodBars />
      ) : (
        <>
          <Header />
          <Pay />
        </>
      )}
    </>
  );
};

export default Payment;
