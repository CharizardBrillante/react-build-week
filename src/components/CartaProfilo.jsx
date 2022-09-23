import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from "react-redux";
import{BsBookmarkFill} from 'react-icons/bs'
import {AiFillSketchSquare} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const CartaProfilo = () => {
    
    const loggedUser = useSelector((state) => state.loggedUser.loggedUser);
    const navigate = useNavigate();

  return (
    <div className='profile-sidebar'>
    <Card>
      
      <Card.Header className='side-profile-header'>
        <img src='https://cuborosso.com/wp-content/uploads/2019/10/linkedin-background-image-elegant-awesome-linkedin-cover-ideas-pilation-of-linkedin-background-image.jpg' alt='' className='side-profile-header-img'/>        
        <img className='side-profile-img' src={loggedUser.image} alt='' onClick={()=>navigate(`/user/${loggedUser._id}`)}/>
        <h5 onClick={()=>navigate(`/user/${loggedUser._id}`)}>{loggedUser.name} {loggedUser.surname}</h5>
        <p className='side-profile-subtitle'>{loggedUser.title}</p>
      </Card.Header>
      
      <ListGroup className='side-profile-mid'>
        <ListGroup.Item>
          <p className='p-card-mid-1'>Connections</p>
          <p className='p-card-mid-1'>Grow your network</p>
        </ListGroup.Item>

        <ListGroup.Item>
          <p className='p-card-mid-2-h'>Access exclusive tools &amp; insights</p>
          <p className='p-card-mid-2'><AiFillSketchSquare size={23} style={{color: 'gold'}}/> Try Premium for free</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className='p-card-bottom'><BsBookmarkFill/>My items</p>
        </ListGroup.Item>
      </ListGroup>
    </Card>

    <Card className='mt-3 side-profile-bottom'>
    <ListGroup>
        <ListGroup.Item className='side-profile-links'>        
            <Link to='/' className='side-profile-link'>Groups</Link>
            <Link to='/' className='side-profile-link'>Event</Link>
            <Link to='/' className='side-profile-link'>Followed hashtags</Link>
        </ListGroup.Item>
        <ListGroup.Item>Discover More</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  );
}

export default CartaProfilo;