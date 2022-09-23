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
        let data = people?.filter(u => compareArea(u.area, loggedUser.area));

        setPeopleYouMayKnow(data.filter(u => u.image !== ''));
        }
        console.log(loggedUser.area)
    }, [people])

    const compareArea = (area1, area2) => {
        let arr1 = area1?.split(' ');
        let arr2 = area2?.split(' ');
        if (typeof arr1 === 'object' && typeof arr2 === 'object') {
            for (let atom1 of arr1) {
                for (let atom2 of arr2) {
                    if (atom1.toLowerCase() === atom2.toLowerCase()) {
                        return true
                    }   
                }
            }
        }
        //console.log('area1: ', area1, 'area2: ', area2)
        //console.log('arr1: ', arr1, 'arr2: ', arr2)
        return false
    };
    return (
        <ListGroup className='people-list'>

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
                    className="show-more-people">
                        {open ? <span>Show Less <BsChevronCompactUp size={25} color="gray"/></span> : <span>Show More <BsChevronCompactDown size={25} color="gray"/></span>}
                </Button>
                </>
            )}                        
        </ListGroup>
    )
}

export default PeopleYouMayKnow

