import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, logout } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfile(null, null, null));
  }, [dispatch, token]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Kampus Merdeka
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  {user?.name}
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                  }}
                >
                  Logout
                </Nav.Link>
                {user.role == "super-admin" || user.role == "admin" ? (
                  <Nav.Link as={Link} to="/tambah_mobil">
                    tambah mobil
                  </Nav.Link>
                ) : null}
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
