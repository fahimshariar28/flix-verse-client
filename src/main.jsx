import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FlixVerse from "./pages/FlixVerse";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import MainLayout from "./Layouts/MainLayout";
import Player from "./pages/Player";
import { Provider } from "react-redux";
import { store } from "./store";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Linked from "./pages/Linked";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <FlixVerse />,
      },
      {
        path: "/player",
        element: <Player />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tv",
        element: <TvShows />,
      },
      {
        path: "/mylist",
        element: <Linked />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
