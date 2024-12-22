```javascript
// pages/about.js
import { Suspense, lazy } from 'react';

const MyComponent = lazy(() => import('./MyComponent'));

export default function About() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
       <MyComponent/>
    </Suspense>
  );
}
```
```javascript
// pages/MyComponent.js

export default async function MyComponent() {
  const data = await fetchData(); 

  return (
    <div>
      <h1>About Page</h1>
      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
}

async function fetchData() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2-second delay
  return { message: 'Data fetched successfully!' };
}
```