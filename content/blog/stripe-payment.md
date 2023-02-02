---
path: stripe-payment
date: 2023-02-02T17:42:11.261Z
title: Stripe Payment
description: Stripe payment in React.js
---
Stripe is a payment platform that provides a simple, developer-friendly way to accept payments online. Stripe makes it easy to integrate payment processing into your website or mobile app without having to deal with complex payment gateway and merchant account setup and management.

Stripe supports a wide range of payment methods, including credit and debit cards, and alternative payment methods like Apple Pay and Google Pay. The platform offers a variety of tools and APIs that allow users to easily customize their payment experience, offering features such as automatic fraud detection, real-time reporting, and automatic receipt generation.

With Stripe, you can accept one-time payments or set up recurring payments for your subscriptions. You can use the platform to manage your customer data and payment history. Stripe also offers built-in support for many different currencies and offers transparent pricing with no hidden fees.\
\
Used by companies of all sizes, from small startups to large corporations, Stripe is known for its high level of security and reliability. If you're looking for a simple and flexible way to accept payments online, I recommend considering Stripe.

#### Integrate Stripe in React.js

Example repository: *https://gitlab.com/MufcAbhi/ecommerce/-/tree/master*

* Login to Stripe and create your API Keys and secret

![](https://avipradhanang.files.wordpress.com/2023/02/screenshot-from-2023-02-02-23-06-27.png?w=1024)

* Install stripe for react.js

```
npm install --save @stripe/react-stripe-js @stripe/stripe-js
```

* Initialize Stripe in your component

```
import React from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";

import { publishableKey } from 'configs/stripe';

import PaymentDetail from "components/Payment/detail";

const stripePromise = loadStripe(publishableKey);

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentDetail />
        </Elements>
    );
}

export default Payment;

// views/Payment
```

* In the component that displays the payment options, import stripe components

```
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
```

* In my example, I have used Card payment via Stripe. So to display the card component,

```
<div className="c-payment-detail__card">
    <CardElement />
</div>
```

* Payment creation is done here via the firebase function using Stripe. The **paymentMethod** and **paymentConfirmation** are done in the component in this example. In retrospect, it might make sense to do the entire stripe payment process in the [firebase function](https://abhijeetpradhanang.com.np/blog/firebase-functions/). On submitting the form for processing payment.

```
 const cardElement = elements.getElement('card');

        apiInstance.post('/payments/create', {
            amount: totalAmount * 100,
            shipping: {
                name: recipientName,
                address: {
                    city: shippingAddress.city,
                    country: shippingAddress.country,
                    line1: shippingAddress.addressLine1,
                    postal_code: shippingAddress.postalCode,
                    state: shippingAddress.state,
                }
            }
        }).then(({ data: clientSecret }) => {
            stripe.createPaymentMethod({
                billing_details: {
                    name: nameOnCard,
                    address: {
                        city: billingAddress.city,
                        country: billingAddress.country,
                        line1: billingAddress.addressLine1,
                        postal_code: billingAddress.postalCode,
                        state: billingAddress.state,
                    },
                },
                card: cardElement,
                type: 'card',
            }).then(({ paymentMethod }) => {
                stripe.confirmCardPayment(clientSecret, {
                    payment_method: paymentMethod.id
                }).then(({ paymentIntent }) => {
                    dispatch(clearCart());
                })
            }); 
        });

// components/Payment/detail.tsx
```

* Once the payment is done, you can check the payments in your Stripe dashboard

![](https://avipradhanang.files.wordpress.com/2023/02/screenshot-from-2023-02-02-23-10-10.png?w=1024)