import { ListGroup, Button, Collapse } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PeoplePreview from './PeoplePreview';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'

const PeopleYouMayKnow = () => {
    const loggedUser = useSelector(state => state.loggedUser.loggedUser);
    const people = useSelector(state => state.users.fetchedUsers['0']);
    const [peopleYouMayKnow, setPeopleYouMayKnow] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(()=> {
        if (people) {
        let data = people?.filter(u => u?.area===loggedUser?.area && u._id!==loggedUser._id);
        let specialChars = /[`!@#$%^&*()_+\-=\[\] {};':"\\|,.<>\/?~]/;
        setPeopleYouMayKnow(data.filter(u => u.image !== '' || specialChars.test(u.image)));
        }
    }, [people])

    return (
        <ListGroup>

            <ListGroup.Item>
                <h4>People you may know</h4>
            </ListGroup.Item>

            {peopleYouMayKnow.slice(0,5).map(user => (
                <ListGroup.Item key={user._id}>
                    <PeoplePreview
                        imgUrl={user.image}
                        name={`${user.name} ${user.surname}`}
                        workPosition={user.title}
                        id={user._id}/>
                </ListGroup.Item>
            ))}
            {(peopleYouMayKnow.length > 5) && (
                <>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                    {peopleYouMayKnow.slice(5,peopleYouMayKnow.length).map(user => (
                        <ListGroup.Item key={user._id}>
                            <PeoplePreview
                                imgUrl={user.image}
                                name={`${user.name} ${user.surname}`}
                                workPosition={user.title}
                                id={user._id}/>
                        </ListGroup.Item>
                    )) }
                    </div>
                </Collapse>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className="people-btn">
                        {open ? <span>Show Less <BsChevronCompactUp size={25} color="gray"/></span> : <span>Show More <BsChevronCompactDown size={25} color="gray"/></span>}
                </Button>
                </>
            )}                        
        </ListGroup>
    )
}

export default PeopleYouMayKnow

