/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";

import { Product } from "./pages/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        async lazy() {
          const { Home } = await import("./pages/home");
          return { Component: Home };
        },
      },
      {
        path: "auth",
        async lazy() {
          const { Auth } = await import("./pages/auth");
          return { Component: Auth };
        },
      },
      {
        path: "product/:id",
        Component: Product,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
