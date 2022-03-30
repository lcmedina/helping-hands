import { Container, Form } from "react-bootstrap";

const Donate = () => {
    return ( 
        <Container className="donate-conatiner">
            <div className="donate-bg">
            <div className="donate-page">
            <Form className="mb-3">
                <Form.Group>
                    <Form.Select size="lg" className="mb-3">
                        <option>What would you like to donate?</option>
                        <option>Homegoods</option>
                        <option>Clothes</option>
                        <option>Child Carriers</option>
                        <option>School</option>
                        <option>Personal Care</option>
                    </Form.Select>
                    <Form.Control size="lg" className="mb-3" type="number" min="1" max="100">
                    </Form.Control>
                </Form.Group>
                </Form>
                <button className="call-to-action mb-3">Continue</button>
            <button className="button filter-btn">Back</button>
            </div>
            </div>
        </Container>
     );
}
 
export default Donate;