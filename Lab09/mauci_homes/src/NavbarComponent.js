import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import mauchilogo from './maucilogo.png'
import './NavbarComponent.css';
import{ Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import icon1 from './images/Icons/Bathroom 1.png'
import icon2 from './images/Icons/stairs.png'
import icon3 from './images/Icons/bed.png'
import icon4 from './images/Icons/stove.png'
import icon5 from './images/Icons/sofa.png'

const NavbarComponent = () => {
    return (  
      <Navbar expand="md" fixed="top">
        <Navbar.Brand>
        <LinkContainer to="/Home">
        <Nav.Link>
          <img
            alt="Mauci Homes Logo"
            src={mauchilogo}
            width="110"
            height="110"
            className="d-inline-block align-top"
          />
          </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <LinkContainer to="/AboutUsPage">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
            <NavDropdown title="Renovations" id="collasible-nav-dropdown">
              
              <LinkContainer to="/BathroomRenovationPage">
                <Nav.Link><img src={icon1} className="NavIcon" alt="Header Image" ></img>Bathroom</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/BasementRenovationPage">
                <Nav.Link><img src={icon2} className="NavIcon" alt="Header Image" ></img>Basement</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/BedroomRenovationPage">
                <Nav.Link><img src={icon3} className="NavIcon" alt="Header Image" ></img>Bedroom</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/KitchenRenovationPage">
                <Nav.Link><img src={icon4} className="NavIcon" alt="Header Image" ></img>Kitchen</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/LivingRoomRenovationPage">
                <Nav.Link><img src={icon5} className="NavIcon" alt="Header Image" ></img>Living Room</Nav.Link>
              </LinkContainer>
              
                
           
              <NavDropdown.Divider />
              <LinkContainer to="/RenovationBooking">
                <Nav.Link>Book a Renovation Consultation</Nav.Link>
              </LinkContainer>
            </NavDropdown> 
              
            <NavDropdown title="Custom Houses" id="collasible-nav-dropdown">
             <LinkContainer to="/CustomHouses">
              <Nav.Link>Explore Our Custom Homes</Nav.Link>
            </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/HouseTourAppointment">
                <Nav.Link>Book a House Tour</Nav.Link>
              </LinkContainer>
            </NavDropdown>
            
            <NavDropdown title="Community" id="collasible-nav-dropdown">
            <LinkContainer to="/ExCustomerPage">
                <Nav.Link>Talk an Ex Customer</Nav.Link>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/TeamTalkPage">
                <Nav.Link>Talk to Our Team</Nav.Link>
              </LinkContainer>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
 
export default NavbarComponent;