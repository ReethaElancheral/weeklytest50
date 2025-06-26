import { useState } from 'react'

import './App.css'

import { useEffect, useRef } from "react";

export default function App() {
  const paypalRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
script.src = "https://www.paypal.com/sdk/js?client-id=ASy7e9j6LzhhBtAtf1IW9ZuF3RofcRKqp0ZmDQH7sgrFvIGCsxx54LPz0stkE-n-5S8ZWBpirjUADiPP&currency=USD";
    script.addEventListener("load", () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1.00", 
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`✅ Transaction completed by ${details.payer.name.given_name}`);
          });
        },
        onError: (err) => {
          console.error("Payment Error:", err);
          alert("❌ Something went wrong during payment.");
        },
      }).render(paypalRef.current);
    });
    document.body.appendChild(script);
  }, []);

  return (
     <div className="payment-container">
        <div className="payment-box">
      <h1>🛒 PayPal Checkout</h1>
      <p>Total: <strong>₹1.00</strong></p>
      <div ref={paypalRef}></div>
    </div>
   </div>
  );
}

