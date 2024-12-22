# Next.js 15 Client-Side Data Fetching Issue

This repository demonstrates a subtle bug in Next.js 15 applications involving client-side data fetching within a dynamic route component.  The application shows a blank screen initially, even though the data fetches successfully.  The data only appears after a page navigation.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe that the page initially is blank then the content is updated after 2 seconds.

## Solution

The solution involves using `Suspense` and `lazy` to conditionally render the component after the data has been fetched.