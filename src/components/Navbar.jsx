import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import "./Navbar.css";

function Navigationbar() {
  return (
    <Navbar sticky = "top" expand="lg" className="bg-body-tertiary" bg="#DCB8CB" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home"> 
        {/* <img
              src="public/images/hansalLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Hansal Logo"
        />{' '} */}
            Hansal Vaikkath
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Featured Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MusicMap</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                IndieTasker
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">GameJam 2023</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Github Projects
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;