---
path: firebase-functions
date: 2023-02-02T17:37:00.963Z
title: Firebase functions
description: Implementation of firebase functions
---
Firebase Functions is a serverless computing platform by Google that lets you run backend code for your web and mobile apps. Functions are event-driven, meaning they run in response to events such as HTTP requests, database changes, and authentication events. They can be written in JavaScript (Node.js) and run on Google's infrastructure. Firebase Functions provides automatic scaling and a simple development workflow, making it easy to build and maintain backend functionality for your app.

#### Creating and deploying firebase functions

1. Get started with the firebase function from the firebase console

   * `npm install -g firebase-tools`
   * `firebase login`
2. Create your function locally

   * `firebase init`

     * Configure and deploy Cloud Functions
     * Existing project
     * Select firebase project
3. This creates a '**firebase**' directory in your project along with **.firebaserc** & **firebase.json**
4. fuctions/index.js: write what you want to do here
5. Serve your firebase function to test locally: `npm run serve`
6. Deploy the function: `firebase deploy`
7. Request from your application to the firebase function using the link after serving your function.



##### Firebase/index.js

```
const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("STRIPE_KEY");

const app = express();

app.use(cors({
  origin: true,
}));
app.use(express.json());

app.get("*", (req, res) => {
  res.status(404).send("Not found");
});

app.post("/payments/create", async (req, res) => {
    try {
        const { amount, shipping } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            shipping,
        });

        res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
});

exports.api = functions.https.onRequest(app);

// firebase/index.js
```



##### Implement the firebase function into our component

baseUrl used here is the one that you get after serving the function locally. Once the function is deployed, use the URL from your firebase dashboard.

Example: `https://us-central1-react-ecommerce-e510f.cloudfunctions.net/api`

```
export const apiInstance = axios.create({
  baseURL: 'http://127.0.0.1:5001/react-ecommerce-e510f/us-central1/api',
});
```

```
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
})
```

##### Deploy the function

Here's how the firebase dashboard will look after the function has been deployed:

![](https://avipradhanang.files.wordpress.com/2023/02/screenshot-from-2023-02-02-22-31-12.png?w=1024)

## Firebase functions vs AWS Lambda

Firebase Functions and AWS Lambda are both serverless computing platforms that allow you to run backend code for your app without having to manage servers. However, there are some differences between the two:

1. Provider: Firebase Functions is provided by Google and runs on Google Cloud Platform, while AWS Lambda is provided by Amazon Web Services.
2. Use Cases: Firebase Functions is specifically designed to support Firebase and Google Cloud services, making it a good choice for building and running backend code for web and mobile apps. On the other hand, AWS Lambda supports a wider range of use cases and can be used to run backend code for various types of applications and services.
3. Development Workflow: Firebase Functions has a simple, integrated development workflow that makes it easy to get started and quickly build and deploy backend code. AWS Lambda provides more customization options but can require more setup and configuration.
4. Pricing: Both Firebase Functions and AWS Lambda have a free tier, but the cost of running backend code can vary depending on the amount of resources required and the number of requests made. In general, Firebase Functions is more cost-effective for smaller projects, while AWS Lambda may be more cost-effective for larger, more complex projects.

In summary, Firebase Functions is a good choice for building backend code for web and mobile apps that use Firebase and Google Cloud services, while AWS Lambda is a more flexible option that can be used for a wider range of use cases. The choice between the two will depend on your specific needs and requirements.