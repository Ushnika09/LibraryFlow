import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Components/Browse.jsx";
import Add from "./Components/Add.jsx";
import Main from "./Components/Main.jsx";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "/",
        element: <Main/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoutes} />
);
