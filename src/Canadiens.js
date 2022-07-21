import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";

function Canadiens() {
    let navigate = useNavigate();
    return (
        <div>
        <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">statsHOCKEY</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item"><button onClick={() => {navigate("/statsHOCKEY")}}>Home</button></li>
                <li class="nav-item"><button onClick={() => {navigate("/Divisions")}}>Divisions</button></li>
                <li class="nav-item"><button onClick={() => {navigate("/Graphs")}}>Graphs</button></li>
                <li class="nav-item"><button onClick={() => {navigate("/Offers")}}>Offers</button></li>
            </ul>
        </header>
        </div>
        <Container class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <div className="text-center">
            <h1>MONTREAL CANADIENS</h1>
                <Card className="py-4">
                    <Card.Img variant="top" src="./statsHOCKEY/assets/rink.jpg" />
                    <Card.Body>
                        <Card.Text>
                            <b>Top Forward: Nick Suzuki</b><br></br>
                            <p>GP: 82, G: 21, A: 40, PTS: 61</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="py-4">
                    <Card.Img variant="top" src="./statsHOCKEY/assets/skate.jpg" />
                    <Card.Body>
                        <Card.Text>
                            <b>Best Defender: Jeff Petry</b><br></br>
                            <p>GP: 68, G: 6, A: 21, PTS: 27</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="py-4">
                    <Card.Img variant="top" src="./statsHOCKEY/assets/net.jpg" />
                    <Card.Body>
                        <Card.Text>
                            <b>Starting Goalie: Sam Montembeault</b><br></br>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant="dark" onClick={() => {navigate("/statsHOCKEY")}}>Back to Home</Button>
        </div>
        </Container>
        </div>
    );
  }
  
  export default Canadiens;