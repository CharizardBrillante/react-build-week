import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PeoplePreview from './PeoplePreview';

const PeopleYouMayKnow = () => {
    const people = useSelector(state => state.users.fetchedUsers)
    return (
        <ListGroup>
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

