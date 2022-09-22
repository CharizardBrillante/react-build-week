import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { BsPeopleFill, BsGrid3X3GapFill } from 'react-icons/bs';
import { MdWork, MdNotifications } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { logoutAction } from '../redux/actions';
import NavOffCanvas from './NavOffCanvas';
import SearchBar from './SearchBar';

const MyNavbar = () => {
  const loggedUser = useSelector(state => state.loggedUser.loggedUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Navbar bg="#fff" className='navbar'>      
      <Navbar.Brand xs={5} className='ms-5'>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo linkedin" className='logo'/>
      </Navbar.Brand>
      <SearchBar/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="nav-anchors">
            <Link to='/'><FaHome color='gray' size={25}/>
              <p>Home</p>
            </Link>
            <Link to='/'> <BsPeopleFill color='gray' size={25}/>
              <p>My Network</p>
            </Link>
            <Link to='/'> <MdWork color='gray' size={25}/>
              <p>Jobs</p>
            </Link>
            <Link to='/'> <AiFillMessage color='gray' size={25}/>
              <p>Messaging</p>
            </Link>
            <Link to='/'><MdNotifications color='gray' size={25}/>
              <p>Notifications</p>
            </Link>
            {loggedUser ? (
            <div className='Me'>
              <img src={loggedUser.image} alt={`${loggedUser.name} ${loggedUser.surname}`} className='nav-avatar'/>
              <NavDropdown title="Me" drop='start'>
              <NavDropdown.Item className='nav-profile-title'>
                <img src={loggedUser.image} alt={`${loggedUser.name} ${loggedUser.surname}`} className='post-avatar'/>
                <div>
                  <span className='nav-dropdown-name'>{`${loggedUser.name} ${loggedUser.surname}`}</span>
                  <span className='nav-dropdown-title'>{loggedUser.title}</span>
                </div>                
              </NavDropdown.Item>
                <NavDropdown.Item className='view-profile-btn'>
                  <Link to={`/user/${loggedUser._id}`} className='nav-view-profile'>View Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Account</NavDropdown.Item>
                <NavDropdown.Item>Try premium for free</NavDropdown.Item>
                <NavDropdown.Item>Settings & Privacy</NavDropdown.Item> 
                <NavDropdown.Item>Help</NavDropdown.Item>
                <NavDropdown.Item>Language</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Manage</NavDropdown.Item>
                <NavDropdown.Item>Posts & Activity</NavDropdown.Item>
                <NavDropdown.Item>Job Posting Account</NavDropdown.Item>
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
            <div className='work-icon' onClick={handleShow}>
              <BsGrid3X3GapFill color='gray' size={30}/>
              <div>Work</div>
            </div>
          </Nav>          
        </Navbar.Collapse>
    </Navbar>
    <NavOffCanvas placement='end' name='end' show={show} onHide={handleClose}/>
    </>
  );
}
export default MyNavbar