import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "@Views/layout/assets/header.scss";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="header_custom">
        <Navbar.Brand href="/">Movies</Navbar.Brand>
        <Nav className="me-auto">
          {/*<Nav.Link href="#home">Home</Nav.Link>*/}
          {/*<Nav.Link href="#features">Features</Nav.Link>*/}
          {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;
