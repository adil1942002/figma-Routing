import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Btn from '../button/Button';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { NavLink } from 'react-router-dom';
import  './navbar.css'

function LinksNavbar() {
    return (
        <>

            <Navbar expand="lg" className=" p-4">
                <Container fluid >
                   
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >

                        <Nav className="ms-auto  ">
                            <NavLink className='hover mx-3 ' to="/">Home</NavLink>

                            <NavLink to="/About" className='hover  mx-3'>About</NavLink>
                            <NavLink to="/DashboardPage" className='hover  mx-3'>DashboardPage</NavLink>
                            
                          
                            
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default LinksNavbar;