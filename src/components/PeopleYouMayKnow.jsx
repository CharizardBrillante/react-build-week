import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PeoplePreview from './PeoplePreview';

const PeopleYouMayKnow = () => {
    const loggedUser = useSelector(state => state.loggedUser.loggedUser);
    const people = useSelector(state => state.users.fetchedUsers['0']);
    const [peopleYouMayKnow, setPeopleYouMayKnow] = useState([]);

    useEffect(()=> {
        if (people) {
        let data = people?.filter(u => u?.area===loggedUser?.area);
        let specialChars = /[`!@#$%^&*()_+\-=\[\] {};':"\\|,.<>\/?~]/;
        setPeopleYouMayKnow(data.filter(u => u.image !== '' || specialChars.test(u.image)));
        }
    }, [people])

    return (
        <ListGroup>
            <ListGroup.Item>
                <h4>People you may know</h4>
            </ListGroup.Item>
            
            {
                peopleYouMayKnow.map(user => (
                    <ListGroup.Item key={user._id}>
                        <PeoplePreview
                            imgUrl={user.image}
                            name={`${user.name} ${user.surname}`}
                            workPosition={user.title}/>                        
                    </ListGroup.Item>
                )) }
        </ListGroup>
    )
}

export default PeopleYouMayKnow

