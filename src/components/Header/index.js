import React from "react"
import { Navbar, Nav, Button } from "react-bootstrap"
const Header = () => {
  return (
    <Navbar
      bg="transparent"
      variant="dark"
      expand="lg"
      className="px-sm-0 px-md-5 py-4"
    >
      <Navbar.Brand href="#" className="ml-sm-5 ml-md-5 ml-lg-4 ml-xl-5">
        <h1 className="font-weight-bold">Maxeon</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto ">
          <Nav.Link href="#" className="ml-md-5">
            Products
          </Nav.Link>
          <Nav.Link href="#" className="ml-md-5">
            Features
          </Nav.Link>
          <Nav.Link href="#" className="ml-md-5">
            Use Cases
          </Nav.Link>
          <Nav.Link href="#" className="ml-md-5">
            Pricing
          </Nav.Link>
          <Nav.Link className="ml-md-5 mr-lg-4 mr-xl-5">
            <Button variant="light" className="rounded-pill px-3 py-0">
              Login
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
