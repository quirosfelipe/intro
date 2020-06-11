import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // to convert to cents
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GsuWRDx1dJW0FcFSMLRfcOe21IujWREz1hypYuiM271JEkZb0DtRQiMnjYJtpV1dq129VuFbRyrbHOqpfNnOJ9j009fL1ghA4";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Complete your order"
      name="Intro | Music Stores LLC."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
