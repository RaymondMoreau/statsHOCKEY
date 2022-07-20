import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Button, Card } from "react-bootstrap";

function Graphs() {
    let navigate = useNavigate();
    return (
        <div>
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
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
        <Container>
        <Row>
            <Col xs={3}>
                <div className="py-5 px-2 d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Most Goals/Game
                    </Button>
                </div>
                <div className="py-5 px-2 d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Save Percentage
                    </Button>
                </div>
                <div className="py-5 px-2 d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Top +/- Ratings
                    </Button>
                </div>
                <div className="py-5 px-2 d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Teams Win Streaking
                    </Button>
                </div>
                <div className="py-5 px-2 d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Top Teams
                    </Button>
                </div>
            </Col>

            <Col xs={9}>
                
            <Card className="bg-dark text-white">
                <Card.Img src="./statsHOCKEY/assets/goals.png" alt="image of graph representing players who scored most goals (Will load other images based on button presses)" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            
            </Col>
        </Row>
        </Container>
        </div>
    );
  }
  
  export default Graphs;