import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './HeaderNavigation.css';

const HeaderNavigation = () => {
    const { user, logOut } = useAuth();
    const [dbUser, setDbUser] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const userEmail = [user?.email];

    useEffect(() => {
        if (userEmail) {
            fetch('https://immense-atoll-58218.herokuapp.com/users/by-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userEmail)
            })
                .then(res => res.json())
                .then(data => {
                    setDbUser(data);
                })
        }

    }, [user]);

    useEffect( () => {
        if (dbUser[0]) {
            if (dbUser[0].role === "admin") {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        }
    }, [dbUser]);

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
                            !user ? '' : !isAdmin && 
                            <Nav.Link as={Link} to="/user-dashboard" className="text-dark fw-500">Dashboard</Nav.Link>
                        }
                        {
                            !user ? '' : isAdmin &&
                            <Nav.Link as={Link} to="/admin-dashboard" className="text-dark fw-500">Admin DashBoard</Nav.Link>
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