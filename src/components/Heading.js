import React from 'react'
import {Link} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container,

} from 'reactstrap';

export const Heading = () => {
    return (
      <Navbar  color="dark" dark>
       <Container>
           <NavbarBrand href="/">my Team</NavbarBrand>
           <Nav>
            <Link className="btn btn-primary" to="/add"> Add User</Link>
            </Nav>
       </Container>
       </Navbar>
    )
}
