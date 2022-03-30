import { Container, Form } from "react-bootstrap";
import profile from "../images/profile.png"
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()

    return ( 
        <Container className="login-page">
            <h1 className="heading">Sign In</h1>
            <div className="profile-icon">
                <img src={profile} alt="profile icon" width={158} height={158} />
            </div>
            <Form>
                <Form.Group className="mb-3 mt-5">
                    <Form.Control
                    type="text"
                    placeholder="Username"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    />
                </Form.Group>
            </Form>
            <button className="call-to-action" onClick={() => navigate('/donate')}>Login</button>
        </Container>
     );
}
 
export default Login;