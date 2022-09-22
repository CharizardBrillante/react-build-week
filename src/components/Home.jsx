import { Container, Row, Col } from 'react-bootstrap';
import NewPostCard from './NewPostCard';
import News from './News';
import PeopleYouMayKnow from './PeopleYouMayKnow';
import { useSelector } from 'react-redux';
import CartaProfilo from './CartaProfilo';

const Home = () => {
    const loggedUser = useSelector(state => state.loggedUser.loggedUser);
    
    return (
        <Container fluid>
            <Row>
                <Col lg={3}>
                {loggedUser && <CartaProfilo/>}
                </Col>
                <Col lg={6}>
                    <News/>
                </Col>
                <Col lg={3}>
                    {loggedUser && <PeopleYouMayKnow/>}
                </Col>
            </Row>
        </Container>
    )
}

export default Home
