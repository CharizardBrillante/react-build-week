import { loginAction, saveTokenAction } from "../redux/actions";
import { Form, Button, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.fetchedUsers[0]);
    const [email, setEmail] = useState('');
    const [loggedUser, setLoggedUser] = useState(null);
    const [userToken, setUserToken] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [permissions, setPermissions] = useState([
        {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJjMTZiOTM0ZDQ0ODAwMTVmZDY5MTIiLCJpYXQiOjE2NjM4MzUyNjUsImV4cCI6MTY2NTA0NDg2NX0.UUF4IRbf2rKB0s63nN5cBEcxOLwxARxCI5d96qs8Iss',
            mail: 'ilbaffo@gmail.com'
        },
        {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWJkZjZkNzlhNTAwMTUwOTAyZWUiLCJpYXQiOjE2NjM1NzI5NjAsImV4cCI6MTY2NDc4MjU2MH0.TBiQ1Cyg8H0ysQhW1CxyB80Nbf5EaV0yPUj6tU2R9zQ',
            mail: 'flaviopnt@hotmail.it'
        },
        {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWEyMTZkNzlhNTAwMTUwOTAyZTkiLCJpYXQiOjE2NjM1NzI1MjUsImV4cCI6MTY2NDc4MjEyNX0.svVN4mjN8ujMpxej4cgRgdkoStgu0gd7btVpqJBqERY',
            mail: 'riccardo.bonaiuto@gmail.com'
        },
        {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJjMTg3ZjM0ZDQ0ODAwMTVmZDY5MTMiLCJpYXQiOjE2NjM4MzQyNDIsImV4cCI6MTY2NTA0Mzg0Mn0.xc8DkisPTFfhFQJxd_ruwvB1Xy490KQ79MLIJ8XGdA4',
            mail: 'chiara.soddu@hotmail.com'
        }
    ]);

    const login = (e) => {
        console.log('users to login:', users)
        e.preventDefault();
        let valid = false
        permissions.forEach((p)=> {
            if (p.mail === email) {
                setLoggedUser(users.filter(u => u.email === email)[0]);
                setUserToken(p.token);
                valid = true
            }
        })
        if(!valid) {
            setShowAlert(true)
        }

        
        console.log('logged in:',loggedUser);        
    }

    if (loggedUser) {
        dispatch(loginAction(loggedUser));
        dispatch(saveTokenAction(userToken));
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
            {showAlert && <Alert variant='danger' className='my-3'>Invalid email</Alert>}
        </Form>
    )
};

export default Login;