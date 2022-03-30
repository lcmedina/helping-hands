import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'

const SignUp = () => {
    let navigate = useNavigate();

    const [User, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        userType: ''
    })
    return ( 
        <Container className="signup-form">
        <h1 className="heading">Sign up</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="text" 
                    placeholder="First Name"
                    value={User.firstName}
                    onChange={e => setUser({ ...User, firstName: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="text" 
                    placeholder="Last Name"
                    value={User.lastName}
                    onChange={e => setUser({ ...User, lastName: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="email" 
                    placeholder="Email Address"
                    value={User.email}
                    onChange={e => setUser({ ...User, email: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="text" 
                    placeholder="Username"
                    value={User.username}
                    onChange={e => setUser({ ...User, username: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="password"
                    placeholder="Password"
                    value={User.password}
                    onChange={e => setUser({ ...User, password: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="password" 
                    placeholder="Confirm Password"
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="radio" label="Donor" name="userType" value={"donor"} onChange={e => setUser({...User, userType: e.target.value})}/>
                    <Form.Check type="radio" label="Recepient" name="userType" value={"recepient"} onChange={e => setUser({...User, userType: e.target.value})} />
                </Form.Group>
            </Form>
            <button className="call-to-action" onClick={() => navigate('/user/location')}>
                    Continue
                </button>
        </Container>
     );
}
 
export default SignUp;