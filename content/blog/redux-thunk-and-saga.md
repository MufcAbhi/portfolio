---
path: redux-thunk-saga
date: 2023-01-29T15:24:22.479Z
title: Redux Thunk and Saga
description: Spotlighting the middlewares used in Redux - Thunk & Saga
---
## M﻿iddlewares in Redux

`R﻿eact component -> Dispatch store action from component -> Redux thunk/saga -> Redux reducer`

## R﻿edux Thunk

R﻿edux's store actions are dispatched synchronously. This is a problem when the application needs to request to an external API. Redux Thunk is a middleware like Redux Saga which sits between an **action being dispatched** and the **action reaching the reducer**.

I﻿t lets us call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the function’s body once the asynchronous operations have been completed. 

https://www.digitalocean.com/community/tutorials/redux-redux-thunk

```
import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
  DELETE_TODO
} from './types';

import axios from 'axios';

export const addTodo = ({ title, userId }) => {
  return dispatch => {
    dispatch(addTodoStarted());

    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        title,
        userId,
        completed: false
      })
      .then(res => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo
  }
});

const addTodoStarted = () => ({
  type: ADD_TODO_STARTED
});

const addTodoFailure = error => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error
  }
});
```

## R﻿edux Saga

Much like Redux Thunk, it allows the Redux store to communicate asynchronously with resources outside of the store—this includes accessing the local storage, HTTP requests, and executing input and output services that are managed efficiently.

I﻿t uses syntax `yield` to run the method in the function. The functions in a saga are followed by an `*` sign and are called **generator functions**. The root saga file calls all the function inside the saga files which coerrespondingly runs the functions associated via the action type. In the below example,

Generator functions allows you to define an iterative algorithm by writing a single function whose execution is not continuous. When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator. When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword. Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators).

L﻿ine 45: `call(onAddProductStart)` calls the function onAddProductsStart which takes the action `productsTypes.ADD_NEW_PRODUCT_START` and then finally calls `addProduct`.

**Example g﻿ithub repo:** `https://gitlab.com/MufcAbhi/ecommerce/-/tree/master/src/redux/Products`

```
import { takeLatest, put, all, call } from 'redux-saga/effects';

import { setLoading, setProduct, setProducts, fetchProductsStart } from './products.actions';
import { handleAddProduct, handleFetchProduct, handleFetchProducts, handleDeleteProduct } from './products.helpers';
import productsTypes from './products.types';

import { auth } from 'utils/firebase';

export function* addProduct({ payload: {
  category,
  description,
  imgSrc,
  name,
  price,
}}) {
  try {
    yield put(setLoading(true));

    const timestamp = new Date();

    yield handleAddProduct({
      category, 
      createdDate: timestamp,
      description,
      imgSrc,
      name,
      price,
      adminUserUID: auth.currentUser.uid,
    });

    yield put(
      fetchProductsStart()
    );
  } catch (err) {
    console.log(err);
  }
}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
  ])
}

```

## T﻿hunk vs Saga

1. I﻿n thunk, action creators may hold too many async logic functions and thus prone to Promise hell. While in saga, action creators stay pure functions.
2. T﻿hunk contains less boilerplate code, hence easier for beginners.
3. I﻿t is much easier to scale codes in Saga as compared to Thunk.