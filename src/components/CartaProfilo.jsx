import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from "react-redux";
import{BsBookmarkFill} from 'react-icons/bs'
import {AiFillSketchSquare} from 'react-icons/ai';

const CartaProfilo = () => {
    
    const loggedUser = useSelector((state) => state.loggedUser.loggedUser);

  return (
    <div className='profile-sidebar'>
    <Card style={{ width: '13rem' }}>
      
      <Card.Header className='cardheadeer'>
      <img src='https://img.freepik.com/free-vector/abstract-low-poly-elegant-design_1048-13699.jpg' alt='' className='imgsideprofile'/>
      
      <div className='circular-landscape'>
      <img id='imgSidebar'
       src={loggedUser.image}
       roundedCircle
       width={"68px"}
       alt=''
        />
      </div>
        <h5><b>{loggedUser.name}</b></h5>
        <h6>Impiego</h6>
      </Card.Header>
      
      <ListGroup   id='crdsd'>
        <ListGroup.Item><h6>Collegamenti</h6>
        <p><b>Espandi la tua rete</b></p></ListGroup.Item>

        <ListGroup.Item><p>Accedi a strumenti e informazioni in esclusiva</p><p id='premium'><AiFillSketchSquare style={{color: 'gold'}}/> Try Premium for free</p></ListGroup.Item>

        <ListGroup.Item><p><BsBookmarkFill/><b> I miei elementi</b></p></ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '13rem' }} className='mt-3'>
    <ListGroup   id='crdsd'>
        <ListGroup.Item>
        
            <button id='button'>Groups</button> <br />
            <button id='button'>Event</button>  <br />
            <button id='button'>Followed hashtags</button>
          
          
          
          
        </ListGroup.Item>

        <ListGroup.Item className='text-center'>Discover More</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  );
}

export default CartaProfilo;