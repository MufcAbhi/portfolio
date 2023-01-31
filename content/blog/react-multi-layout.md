---
path: react-multi-layout
date: 2023-02-02T15:24:22.479Z
title: React multi-layout routes
description: Implementing multilayered routes in React.js
---

React multi-layout routes refer to React's routing system that allows different routes to render different layouts. This is useful for displaying different parts of your application with different structures or styles.

For example, you might want different layouts for the home page, the dashboard for authenticated users, and the landing page for unauthenticated users. Each of these pages can have a different structure and each root represents a suitable layout.

Applications typically define different routes and specify the layout to use for each route. The routing library will then render the appropriate layout based on the current URL. Additionally, you can pass props to layout components to enable dynamic rendering based on the current route.

Example: https://gitlab.com/MufcAbhi/ecommerce/-/blob/master/src/App.jsHigher-Order

```
 <Route path="admin" element={<AdminLayout />}>
  <Route index element={
    <WithAdminAuth>
      <Admin />
    </WithAdminAuth>
  }/>
  <Route path="products/create" element={
    <WithAdminAuth>
      <ProductCreate />
    </WithAdminAuth>
  }/>
</Route>
<Route path="/" element={<MainLayout />} >
  <Route index element={<Home/>} />
  <Route path="dashboard" element={
    <WithAuth>
      <Dashboard />
    </WithAuth>
  }/>
  <Route path="login" element={<Login />} />
  <Route path="product/:productID" element={<ProductShow />} />
  <Route path="registration" element={<Registration />} />
  <Route path="search" element={<Search />} />
  <Route path="cart" element={<Cart />} />
</Route>
```

In the above example, there are 2 layouts that are being used: AdminLayout and MainLayout. Each layout requires an index element that has a path /. Each of these layouts have their own styling, and children components.

```
import React from 'react';
import { Link, Outlet } from "react-router-dom";

import { Nav } from 'react-bootstrap';

import Footer from 'components/footer';
import Header from 'components/header';

import 'assets/scss/layouts/adminLayout.scss';

const AdminLayout = (props) => {
  return (
    <div className="c-admin">
      <Header />

      <div className="c-admin__content">
        <Nav defaultActiveKey="/admin" className="flex-column c-admin__sidebar">
          <Link to="/admin">Products</Link>
        </Nav>

        <div className="c-admin__body">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AdminLayout;

// AdminLayout
```
