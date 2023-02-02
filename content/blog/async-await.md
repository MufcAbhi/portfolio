---
path: async-await
date: 2023-01-31T15:24:22.479Z
title: All you need to know about async await in JavaScript
description: The concept of async await in JavaScript
---

So, you are working with javascript, right? And you can't wrap your head around why is it that your console statement is returning a different data than the api response or the setTimeout you have set up? Ha! Been there, done that. In this blog post, I will introduce you to the concept of async await.

Before diving our way into the async await in javascript, let me ask you if you know about synchronous & asynchronous  architecture? You do?!! That's great! Let's dive in! If you don't know about it, refer to my this article to know about it since it's an extremely important topic to know about.

#### What is the problem?

As javascript is an asynchronous language, your code in line 15 will not block the execution of code in line 16 even if the previous code has not been executed. For example,

```
let a = 5

setTimeout(() => {
  a += 5

  console.log(a)
}, 3000)

a = 1

console.log(a)
```

In this code, what's the final value of a going to be?

This will result in the final value of a to be 6. And how is that you ask? Shoud it not be 1? The setTimeout gets executed only after 3 seconds, but the code below it is executed regardless of the code above is executed completely or not. This will result in, in the series of event as follows:

```
a = 5 => a = 1 => setTimeout() => a = (1 + 5) = 6
```

But what if we wanted the series of events to be:

a = 5 => setTimeout() => a = (5 + 5) = 10 => a = 1
(i.e. synchronously to the code you have written)

You'll need to wait for the setTimeout to execute before executing codes below it, right?

We can precisely do that with async await!

#### Syntax & solution

There are two keywords that we must use, async and await. Async is added to the start of a function to expect a possibility of the await keyword.

Await can only be used under the async function. Await can be placed before a promise-based function in order to wait for the code to be executed completely.

```
async function () {
  a = await new Promise.resolve(a + 5)

  console.log(a)

  a = 1

  console.log(a)
}
```

As you have already guessed it, the value of a will first be 10, then it will console.log to display 10 and only after that the value of `a` will be 1. In short, the async await function will make the bit of code that you want to pause or wait.

#### Conclusion

Async await is in javascript to make your asynchronous code bit more synchronous. It gives your code a structure that resembles that of synchronous code. Since your code will not be doing anything until it is executed completely, the overuse of such structure might take a toll in your code performance, meaning your application will be slow.

Another fantastic operation in javascript is the use of Promises as we have briefly touched upon it's use in async await. Learn more about it here.

I hope you have got a basic understanding of async await & when to use it. Happy coding!
