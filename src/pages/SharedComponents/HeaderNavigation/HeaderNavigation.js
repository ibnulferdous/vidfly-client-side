import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './HeaderNavigation.css';

const HeaderNavigation = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/" className="brand-name fw-800">
                    <img
                        alt=""
                        src="https://i.postimg.cc/PxTWCdLq/logo192.png"
                        width="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span> VIDFLY</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" className="text-dark fw-500">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explore-all-products" className="text-dark fw-500">Explore</Nav.Link>
                        {
                            user && 
                            <Nav.Link as={Link} to="/user-dashboard" className="text-dark fw-500">Dashboard</Nav.Link>
                        }
                        {
                            user && 
                            <Nav.Link as={Link} to="/add-product" className="text-dark fw-500">Add Product</Nav.Link>
                        }
                        {
                            user && 
                            <NavDropdown title="Admin" id="collasible-nav-dropdown" className="text-dark fw-500">
                                <NavDropdown.Item href="#action/3.1" className="text-dark fw-500">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="text-dark fw-500">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="text-dark fw-500">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" className="text-dark fw-500">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Nav>
                    <Nav>
                        {
                            user && 
                            <Nav.Link 
                                href="#deets" 
                                className="text-dark fw-500"
                            >{user.displayName ? user.displayName : user.email ? user.email : "Unknown"}</Nav.Link>
                        }
                        {
                            user ? 
                                <Nav.Link onClick={logOut} className="text-dark fw-500">Log out</Nav.Link>
                            :
                                <Nav.Link as={Link} to="/log-in" className="text-dark fw-500">Log in</Nav.Link>
                        }

                        {
                            !user && 
                            <Nav.Link as={Link} to="/register" className="text-dark fw-500">Register</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNavigation;