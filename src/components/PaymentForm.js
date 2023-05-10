import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const createSubscription = async () => {
    try {
        
    } catch (error) {
        console.error(error)
        alert('Payment Failed' + error.message)
    }
  }

  return (
    <div className="">
      <div>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
      </div>

      <div>
        Email:{" "}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
      </div>

      {/* <PaymentElement /> */}

      <button onClick={createSubscription}>Subscribe</button>
    </div>
  );
}

export default PaymentForm;
