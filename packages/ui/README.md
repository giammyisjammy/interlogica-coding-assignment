# Ui

This package would hold the entire design system of the solution.

Because I had to cut corners during development, I preferred not to get fancy moving components back and forth and decided to leave them where they were (little to zero value to the end product).

There is just a dummy component to make the purpose of this package clear.

Of course this is something that could have been done in a latter stage of the project. In the same vein that you could [move component state up the tree in React](https://legacy.reactjs.org/docs/lifting-state-up.html), we can abstract and move here common components whenever deemed necessary.

The `admin` package has a great example of use case:

```tsx
import * as React from 'react';
import { CounterButton } from 'ui'; // <-- that's it!

export default function App(): JSX.Element {
  return (
    <div className="...">
      {/* ... */}
      <CounterButton /> {/* <-- */}
      {/* ... */}
    </div>
  );
}
```
