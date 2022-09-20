import { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const [inputText, setInputText] = useState('');
    const users = useSelector(state => state.users.fetchedUsers['0']);
    const navigate = useNavigate();
    const filteredUsers = users?.filter((u) => {
            let fullName = `${u.name} ${u.surname}`;
            if (inputText === ''){
                return u
            }else {
                return fullName.toLowerCase().includes(inputText);

            }
        })

    return (
        <div className='search-bar-cotainer'>
            <Form className="search-bar">
                <ImSearch color="grey" size={25} className='search-icon'/> 
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Search"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value.toLowerCase())} />
                </Form.Group>
            </Form>
            <ListGroup>
            {inputText && filteredUsers?.map((user) => (
                <ListGroup.Item 
                    className='search-list-item'
                    key={user._id}
                    onClick={()=>{
                        navigate(`/user/${user._id}`);
                        setInputText('');
                    }}>
                    {user.name} {user.surname}
                </ListGroup.Item>
            ))}
        </ListGroup>
        </div>
    )
};

export default SearchBar;
