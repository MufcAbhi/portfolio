---
path: react-custom-hooks
date: 2023-02-03T15:24:22.479Z
title: React custom hooks
description: Implementing custom hooks in React.js
---

React allows us to create our own hooks on top of the default hooks that it provides like useMemo, useCallback, useEffect, useContext, and useState. Custom Hooks are functions in React that allow you to reuse stateful logic across multiple components. They are a way to extract stateful logic from a component and share it with other components.

The need for custom hooks arises to maintain the concept of **DRY (Don't Repeat Yourself)**.

For example, suppose you have some logic that makes use of some built-in hooks and you need to use the logic in multiple functional components. So, there are two ways left for you —

1) write the same logic in each and every component (which violates the concept of DRY)

2) create a separate function that wraps the logic inside it and then call it from those components.

The second option seems to be the logical and scalable choice as we can write our logic only once. The function that we write here separately is the custom hook. One thing to keep in mind is that hooks work only with the functional components and not with class components.

For example, you can create a custom Hook to handle form input changes, which can then be reused across multiple form components in your application.

```
import { useState } from 'react';

const useInputChange = () => {
  const [values, setValues] = useState({});

  const handleInputChange = (event) => {
    event.persist();
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  return [values, handleInputChange];
};

export default useInputChange;

// custom hook
```

In this example, the useInputChange Hook returns an array with the values state object and the handleInputChange function, which can be destructured and used in a form component as follows:

```
import React from 'react';
import useInputChange from './useInputChange';

const Form = () => {
  const [values, handleInputChange] = useInputChange();

  return (
    <form>
      <input type="text" name="name" onChange={handleInputChange} />
      <input type="email" name="email" onChange={handleInputChange} />
      <input type="password" name="password" onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
```

With this example, the form input change logic is abstracted into a reusable custom Hook, making it easier to manage and maintain.

#### Reference
* https://www.geeksforgeeks.org/reactjs-custom-hooks/

