import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
// apply bootstrap for styling

import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home"
import Profile from "./pages/profile";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";
import Protected from "./components/Protected";
import UnProtected from "./components/Unprotected";
import store from "./redux/store";
import CarProfile from "./pages/car";
import Addcar from "./pages/add_mobil";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <Home />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: (
      <UnProtected>
        <Navbar />
        <Container className="mt-5">
          <Login />
        </Container>
      </UnProtected>
    ),
  },
  {
    path: "/register",
    element: (
      <UnProtected>
        <Navbar />
        <Container className="mt-5">
          <Register />
        </Container>
      </UnProtected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <Profile />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/cars/:id",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <CarProfile />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/tambah_mobil",
    element: (
      <Protected roles={["admin"]}>
        <Navbar />
        <Container className="mt-5">
          <Addcar />
        </Container>
      </Protected>
    ),
  },
]);

function App() {
    return (
      <Provider store={store}>
        <RouterProvider router={router} />

        <ToastContainer theme="colored" />
      </Provider>
    );
}

export default App;
