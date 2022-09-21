import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from "react-redux";
import{BsBookmarkFill} from 'react-icons/bs'
import {AiFillSketchSquare} from 'react-icons/ai';

const CartaProfilo = () => {
    
    //const profile = useSelector((state) => state.profile.actualProfile);

  return (
    <div>
    <Card style={{ width: '13rem' }}>
      
      <Card.Header className='cardheadeer'>
      <img src='https://img.freepik.com/free-vector/abstract-low-poly-elegant-design_1048-13699.jpg' alt='' className='imgsideprofile'/>
      
      <img id='imgSidebar'
       src='https://static.vecteezy.com/ti/vettori-gratis/p1/2534006-social-media-chat-online-immagine-profilo-vuoto-icona-testa-e-corpo-persone-in-piedi-icona-sfondo-grigio-gratuito-vettoriale.jpg'
       roundedCircle
       width={"68px"}
       alt=''
        />
        
        <h5><b>Nome Cognome</b></h5>
        <h6>Impiego</h6>
      </Card.Header>
      
      <ListGroup   id='crdsd'>
        <ListGroup.Item><h6>Collegamenti</h6>
        <p><b>Espandi la tua rete</b></p></ListGroup.Item>

        <ListGroup.Item><p>Accedi a strumenti e informazioni in esclusiva</p><p id='premium'><AiFillSketchSquare style={{color: 'gold'}}/> Try Premium for free</p></ListGroup.Item>

        <ListGroup.Item><p><BsBookmarkFill/><b>I miei elementi</b></p></ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '13rem' }} className='mt-3'>
    <ListGroup   id='crdsd'>
        <ListGroup.Item>
          <ul>
            <li id='li'>Groups</li>
            <li id='li'>Event</li>
            <li id='li'>Followed hashtags</li>
          </ul>
          
          
          
        </ListGroup.Item>

        <ListGroup.Item className='text-center'>Discover More</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  );
}

export default CartaProfilo;