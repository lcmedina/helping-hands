import { Nav, Navbar, Container, Offcanvas, NavDropdown } from 'react-bootstrap';
import '../App.css'
import Home from '../images/icons/homeicon.png';
import Donate from '../images/icons/donateicon.png';
import Receive from '../images/icons/receiveicon.png';
import Resources from '../images/icons/resourcesicon.png';
import Translate from '../images/icons/translateicon.png';

const TitleBar = () => {
    return ( 
      <Navbar expand={false} collapseOnSelect>
      <Container fluid className='navbar'>
        <Navbar.Toggle aria-controls="offcanvasNavbar" id='navToggle' style={{border: 'none'}} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header>
            <Offcanvas.Title id="offcanvasNavbarLabel"><h1 className='heading'>Menu</h1></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 navigation">
              <Container>
              <Nav.Link href="/"><img src={Home} width={50} height={50} alt="house" /> Home</Nav.Link>
              </Container>
              {/* donate dropdown */}
              <Container style={{display: 'flex'}}>
                <img src={Donate} width={50} height={50} alt="donate" />
                <Nav.Link href="/user/donate">Donate</Nav.Link>
              </Container>
              {/* recieve dropdown */}
              <Container style={{display: 'flex'}}>
              <img src={Receive} width={50} height={50} alt="receive" />
              <NavDropdown title="Receive" id="nav-dropdown">
                  <NavDropdown.Item eventKey="2.1">Home Goods</NavDropdown.Item>
                  <NavDropdown.Item eventKey="2.2">Clothes</NavDropdown.Item>
                  <NavDropdown.Item eventKey="2.3">Child Carriers</NavDropdown.Item>
                  <NavDropdown.Item eventKey="2.4">School</NavDropdown.Item>
                  <NavDropdown.Item eventKey="2.5">Personal Care</NavDropdown.Item>
              </NavDropdown>
              </Container>
              {/* resources dropdown */}
              <Container style={{display: 'flex'}}>
              <img src={Resources} width={50} height={50} alt="resources" />
              <NavDropdown title="Resources" id="nav-dropdown">
                  <NavDropdown.Item eventKey="3.1">Language Classes</NavDropdown.Item>
                  <NavDropdown.Item eventKey="3.2">Temporary Housing</NavDropdown.Item>
                  <NavDropdown.Item eventKey="3.3">Food Banks</NavDropdown.Item>
                  <NavDropdown.Item eventKey="3.4">Legal</NavDropdown.Item>
              </NavDropdown>
              </Container>
              {/* translate dropdown */}
              <Container style={{display: 'flex'}}>
              <img src={Translate} width={50} height={50} alt="translate" />
              <NavDropdown title="Translate" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">Polski</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">український</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Русслий</NavDropdown.Item>
              </NavDropdown>
              </Container>
            </Nav>
          </Offcanvas.Body>
          <Offcanvas.Header closeButton />
        </Navbar.Offcanvas>
        <input></input>
        <i class="bi bi-cart"></i>
        <i class="bi bi-person-circle"></i>
      </Container>
    </Navbar>
     );
}
 
export default TitleBar;