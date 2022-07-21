import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";

function RedWings() {
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
            <h1>DETROIT RED WINGS</h1>
                <Card className="py-4">
                    <Card.Img variant="top" src="./statsHOCKEY/assets/rink.jpg" />
                    <Card.Body>
                        <Card.Text>
                            <b>Top Forward: Dylan Larkin</b><br></br>
                            <p>GP: 71, G: 31, A: 38, PTS: 69</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="py-4">
                    <Card.Img variant="top" src="./statsHOCKEY/assets/skate.jpg" />
                    <Card.Body>
                        <Card.Text>
                            <b>Best Defender: Mortiz Seider</b><br></br>
                            <p>GP: 82, G: 7, A: 48, PTS: 50</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="py-4">
                    <Card.Img variant="top" src="./statsHOCKEY/assets/net.jpg" />
                    <Card.Body>
                        <Card.Text>
                            <b>Starting Goalie: Alex Nedeljkovic</b><br></br>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant="dark" onClick={() => {navigate("/statsHOCKEY")}}>Back to Home</Button>
        </div>
        </Container>
        </div>
    );
  }
  
  export default RedWings;