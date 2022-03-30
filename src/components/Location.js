import { Container, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Location = () => {
    let navigate = useNavigate();
    return ( 
        <Container className="location">
            <h1 className="heading">Location Preferences</h1>
            <Dropdown className="mb-5">
                <p>What is your location?</p>
                <Dropdown.Toggle id="dropdown-basic">
                </Dropdown.Toggle>
                <Dropdown.Menu className="location-dropdown">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-5">
                <p>Preferred dropoff/pickup location?</p>
                <Dropdown.Toggle id="dropdown-basic">
                </Dropdown.Toggle>

                <Dropdown.Menu className="location-dropdown">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <button className="call-to-action" style={{marginTop: 20}} onClick={() => navigate('/user/login')}>Create Account</button>
        </Container>
     );
}
 
export default Location;