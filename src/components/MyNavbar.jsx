import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaHome} from 'react-icons/fa';
import {BsPeopleFill, BsGrid3X3GapFill} from 'react-icons/bs';
import {MdWork, MdNotifications} from 'react-icons/md';
import {AiFillMessage} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {Link} from 'react-router-dom'

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#fff" className='navbar'>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo linkedin" className='logo'/>
      <Navbar.Brand href="#home" xs={5} className='ms-5'>React-Bootstrap</Navbar.Brand>
      <Container className='ms-auto' id='Container'>
        <div className='contenitore ms-auto'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="#features" id='link' path='/home' className='m-3 mt-1'><FaHome id='icon' size={25}/> <p>Home</p></Link>
            <Link href="#pricing"  id='link' path='/home' className='m-3 mt-1'> <BsPeopleFill id='icon' size={25}/> <p>My Network</p></Link>
          
            <Link href="#deets"  id='link' path='/home' className='m-3 mt-1'> <MdWork id='icon' size={25}/> <p>Jobs</p></Link>
            <Link id='link' href="#memes" path='/home' className='m-3 mt-1'> <AiFillMessage id='icon' size={25}/> <p>Messaging</p></Link>
            <Link path='/home'  id='link' className='m-3 mt-1'><MdNotifications id='icon' size={25}/> <p>Notifications</p></Link>


            <div className='Me'>
            <CgProfile id='icon' size={25}/>
            <NavDropdown title="Me" id="collasible-nav-dropdown">
            
              <div>
                 <h3>username</h3>
                 <p>Ultima esperienza lavorativa</p>
                 <Button variant="outline-primary">Primary</Button>
                 <NavDropdown.Divider />
                 <h4>Account</h4>
                 <ul id='Account'>
                    <li><b>Try premium for free</b></li>
                    <li>Settings & Privacy</li>
                    <li>Help</li>
                    <li>Language</li>
                 </ul>
              </div>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </div>


            <div className='border-start border-secondary h-50'>
            <BsGrid3X3GapFill id='icon' size={23}/>
            <NavDropdown title="Work" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </div> <p id='premium'>Try Premium for free</p>
          </Nav>
          
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar