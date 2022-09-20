import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PeoplePreview from './PeoplePreview';

const PeopleYouMayKnow = () => {
    const people = useSelector(state => state.users.fetchedUsers['0']?.slice(1, 6))
    return (
        <ListGroup>
            <ListGroup.Item>
                <h4>People you may know</h4>
            </ListGroup.Item>
            
            {people.map(user => (
                <ListGroup.Item key={user._id}>
                    <PeoplePreview
                        imgUrl={user.image}
                        name={`${user.name} ${user.surname}`}
                        workPosition={user.title}/>                        
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default PeopleYouMayKnow

