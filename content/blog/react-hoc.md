---
path: react-hoc
date: 2023-02-01T15:24:22.479Z
title: React.js Higher Order Components
description: Advanced concept in React.js - HOCs
---

Higher-Order Components (HOCs) are advanced techniques in React for reusing component logic. They are a pattern that takes a component and returns a new component with additional props, which can be used to wrap and enhance existing components. HOCs do not modify or mutate the original component, but instead, they compose the original component with additional logic. HOCs are commonly used for adding additional functionality like data fetching, rendering, and logging, to other components.

#### When to use HOCs

* You want to wrap a component with additional functionality like error handling, rendering, and logging.

* The logic you are trying to reuse across components is independent and not tightly coupled to any specific component.

* You want to enhance a component's behavior while preserving its original API.

* You need to share stateful logic across components, rather than duplicating the logic in each component.

#### When not to use HOCs

* They make the component hierarchy more complex and harder to understand.

* They introduce indirection, making it more difficult to debug.

* They can make it challenging to unit-test components since the HOC logic is separated from the component logic.

* They can impact performance if not used correctly, for example, if the HOC re-renders frequently.

* Overusing HOCs can lead to tight coupling between components and HOCs, making it harder to refactor and maintain the codebase.

#### Use case examples

##### ** Authentication**
You can write a HOC that adds authentication functionality to a component. For example, a component that requires a user to be authenticated to access it.

```
import React from "react";
import {
  useLocation,
  Navigate,
} from "react-router-dom";

import { useAuth } from "customHooks";

const WithAuth = props => {
  let location = useLocation();

  if (!useAuth(props)) {
    return (<Navigate to="/login" state={{ from: location }} replace />);
  }

  return props.children;
};

export default WithAuth;
```

```
<Route path="payment" element={
    <WithAuth>
        <Payment />
    </WithAuth>
} />
```

##### ** Data fetching**
You can write a HOC that adds data fetching functionality to a component. For example, a component that needs to fetch data from an API before it can be rendered.

```
import React from 'react';

const withData = (Component) => {
  class WithData extends React.Component {
    state = { data: null };

    componentDidMount() {
      fetch('https://api.example.com/data')
        .then((res) => res.json())
        .then((data) => this.setState({ data }));
    }

    render() {
      return <Component {...this.props} data={this.state.data} />;
    }
  }

  return WithData;
};

const DataDisplay = ({ data }) => <div>{data}</div>;
const DataFetchingDisplay = withData(DataDisplay);
```
