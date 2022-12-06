import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
const Navigation = () => {

    const navigate = useNavigate();
    function logOut() {
        localStorage.clear();
        navigate('/');
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/HomePage">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4207/4207247.png" height={'70px'}
                    />
                    <b>CONTROL-ESCOLAR</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>

                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Nav>
                                    <Nav.Link onClick={logOut}>
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png" height={'30px'}
                                        />
                                        <b>Cerrar Session</b>
                                    </Nav.Link>

                                </Nav>
                            </>
                            :
                            <>
                                <Nav>
                                    <Nav.Link as={Link} to="/Login">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png" height={'30px'}
                                        />
                                        <b>Login</b></Nav.Link>
                                    <Nav.Link as={Link} to="/Register">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/3596/3596029.png" height={'30px'}
                                        />
                                        <b>Registro</b></Nav.Link>
                                </Nav>
                            </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation
