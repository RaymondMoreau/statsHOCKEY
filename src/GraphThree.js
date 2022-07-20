import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Button, Card } from "react-bootstrap";

function GraphThree() {
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
                    <Button variant="dark" size="lg" onClick={() => {navigate("/Graphs")}}>
                        Most Goals/Game
                    </Button>
                </div>
                <div className="py-5 px-2 d-grid gap-2">
                    <Button variant="dark" size="lg" onClick={() => {navigate("/GraphTwo")}}>
                        Save Percentage
                    </Button>
                </div>
                <div className="py-5 px-2 d-grid gap-2">
                    <Button variant="secondary" size="lg" onClick={() => {navigate("/GraphThree")}}>
                        Top +/- Ratings
                    </Button>
                </div>
                <div className="py-5 px-2 d-grid gap-2">
                    <Button variant="dark" size="lg" onClick={() => {navigate("/GraphFour")}}>
                        Teams Win Streaking
                    </Button>
                </div>
                <div className="py-5 px-2 d-grid gap-2">
                    <Button variant="dark" size="lg" onClick={() => {navigate("/GraphFive")}}>
                        Top Teams
                    </Button>
                </div>
            </Col>

            <Col xs={9}>
                
            <Card className="bg-dark text-white">
                <Card.Img src="./statsHOCKEY/assets/ratings.png" alt="image of graph representing players who achieved the highest +/- ratings" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay>
            </Card>
            
            </Col>
        </Row>
        </Container>
        </div>
    );
  }
  
  export default GraphThree;