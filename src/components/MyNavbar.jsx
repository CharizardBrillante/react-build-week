import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaHome, FaSearch} from 'react-icons/fa';
import {BsPeopleFill, BsGrid3X3GapFill} from 'react-icons/bs';
import {MdWork, MdNotifications} from 'react-icons/md';
import {AiFillMessage} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {Link, useNavigate} from 'react-router-dom'
import SearchBar from './SearchBar';
import {useSelector, useDispatch} from 'react-redux';
import {logoutAction} from '../redux/actions';
import { Button } from 'react-bootstrap';

function MyNavbar() {
  const loggedUser = useSelector(state => state.loggedUser.loggedUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
  <Container>
    <Navbar bg="#fff" className='navbar'>
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo linkedin" className='logo'/>
      <Navbar.Brand xs={5} className='ms-5'><SearchBar/></Navbar.Brand>
      <Container className='ms-auto' id='Container'>
        <div className='contenitore ms-auto'>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link href="#features" id='link' to='/home' className='m-3 mt-1'><FaHome id='icon' size={25}/> <p>Home</p></Link>
              <Link href="#pricing"  id='link' to='/home' className='m-3 mt-1'> <BsPeopleFill id='icon' size={25}/> <p>My Network</p></Link>
              <Link href="#deets"  id='link' to='/home' className='m-3 mt-1'> <MdWork id='icon' size={25}/> <p>Jobs</p></Link>
              <Link id='link' href="#memes" to='/home' className='m-3 mt-1'> <AiFillMessage id='icon' size={25}/> <p>Messaging</p></Link>
              <Link to='/home'  id='link' className='m-3 mt-1'><MdNotifications id='icon' size={25}/> <p>Notifications</p></Link>

              {
                loggedUser ? (
                  <div className='Me'>
                <CgProfile id='icon' size={25}/>
                <NavDropdown title="Me" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/1.1"><h3>username</h3></NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.2">Ultima esperienza lavorativa</NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.3">
                    <Link to={`/user/${loggedUser._id}`} variant="outline-primary rounded-pill" id='btnProfilo'>view profile</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/2.1"><h4>Account</h4></NavDropdown.Item>
                  <NavDropdown.Item href="#action/2.2"><b>Try premium for free</b></NavDropdown.Item>
                  <NavDropdown.Item href="#action/2.3">Settings & Privacy</NavDropdown.Item> 
                  <NavDropdown.Item href="#action/2.4">Help</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2.5">Language</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1"><h4>Manage</h4></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Posts & Activity</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Job Posting Account</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={()=>{
                    dispatch(logoutAction());
                    navigate('/')}}>
                      Sign Out
                    </NavDropdown.Item>
                </NavDropdown>
              </div>
                ) : < Link to='/login'><Button className='login-btn'>Login</Button></Link>
              }
              


              <div className='border-start border-secondary h-50'>
                <BsGrid3X3GapFill id='icon' size={23}/>
                <NavDropdown title="Me" id="collasible-nav-dropdown">
                  <div>
                    <NavDropdown.Item href="#action/1.1"><h3>Visit More LinkedIn Products</h3></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/1.2">griglia</NavDropdown.Item>
                  </div>
                  <div>
                    <NavDropdown.Item href="#action/1.3">
                    <Link to={`/user/${loggedUser?._id}`} variant="outline-primary rounded-pill" id='btnProfilo'>view profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/2.1"><h4>LinkedIn Business Services</h4></NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.2"><b>Talent solutions</b> <p>Find, attract and recruit talent</p></NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.3">Settings & Privacy</NavDropdown.Item> 
                    <NavDropdown.Item href="#action/2.4">Help</NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.5">Language</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1"><h4>Manage</h4></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Posts & Activity</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Job Posting Account</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/4.1">Sign Out</NavDropdown.Item>
                  </div>
                </NavDropdown>
              </div> <p id='premium'>Try Premium for free</p>
            </Nav>
            
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  </Container>
  );
}

export default MyNavbar