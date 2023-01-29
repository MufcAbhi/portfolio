---
path: react-firebase-ecommerce
date: 2023-01-29T09:34:11.650Z
title: Ecommerce site using React and Firebase
description: What I used to create an ecommerce website
---
As a personal project to learn in depth about React.js and Firebase, I worked on creating an Ecommerce website. It utilizes firebase authentication along with it's database. In this blog, I will briefly go into all the technologies that I used and learned about while working on it.\
\
H﻿ere's a list of the things I'll be going through:\

* Firebase authentication\
* Redux\
* Redux thunk\
* Redux saga\
* React multi layout routes\
* HoC\
* Custom Hooks\
* Tailwind css\
* Firebase functions\
* Stripe API payment

## F﻿irebase

Firebase is a backend as a service (BAAS) built using Google's framework. It offers a range of tools and services to developers so they can create high-quality apps, and expand their user base.

I﻿t stores data in a JSON like structure and provides a NoSQL database. In this project, I used firebase for authentication with Google and Email, storing product details, and utilized Firebase functions for payment via Stripe API.

#### W﻿hen to use Firebase

* **Develop a whole new application or completely rewrite an existing one:** Firebase makes it simple to construct an application without writing any custom backend code. As an illustration, consider a chat or video conferencing application where handling the backend is not necessary.
* **Add the real-time features without touching the other parts of the code:** The firebase coexists with the server that is already in place in this type of architecture. To enable real-time features without interfering with other components of the program, your clients can be connected to both the server and the firebase. This enables you to build a real-time notification system for users, integrate a chat feature into your website, and produce a live comment stream.
* **M﻿inimal level of integration legacy system or thrid party service:** When your application does not require intensive data processing or any kind of complicated user authentication requirements, Firebase also becomes the best option.
* **Require preferences to be shared across multiple clients:** Implement functionalities like recent search history, recently viewed items, etc.
* **C﻿reating MVPs:** Firebase offers faster development time and can be used to create usable prototypes in a short span of time.
* **F﻿eatures:** Authentication, Hosting, Cloud firestore (database), Cloud storage, Cloud functions, Push notifications.

#### W﻿hen not to use Firebase

* **C﻿omplex queries are required:** Relational queries are not easily dealt with by Firebase, which can cause high processing time. Avoid using firebase if you require queries with more than one single join clause. For android applications that require deep and complex querying such as reversing the order of elements, avoid Firebase.
* **S﻿haring data with third-party:** Due to limited security rules, it is advised not to use Firebase if the application requires data sharing. Enterprise platforms are thus a no-go with Firebase.
* **I﻿ntegrating microservices:** Firebase caches data in memory, which slows down the processes over time. This is why you should not use Firebase if you plan to integrate microservices. 

## R﻿edux

R﻿edux is used to provide a managable and predictable way to manage states in JavaScript applications. Primarily, it is used extensively with React.js but it can be used with other JavaScript frameworks as well.