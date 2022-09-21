import { loginAction } from "../redux/actions";
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.fetchedUsers[0]);
    const [email, setEmail] = useState('');
    const [loggedUser, setLoggedUser] = useState(null);

    const login = (e) => {
        console.log('users to login:', users)
        e.preventDefault();
        setLoggedUser(users.filter(u => u.email === email)[0]);
        
        console.log('logged in:',loggedUser);        
    }

    if (loggedUser) {
        dispatch(loginAction(loggedUser));
        navigate(`/user/${loggedUser._id}`);
    }
    return (
        <Form onSubmit={login} className="login-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)} />
            </Form.Group>
            <Button type='submit' className='login-btn'>Login</Button>
        </Form>
    )
};

export default Login;