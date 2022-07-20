import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Card } from "react-bootstrap";

function Divisions() {
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
        <Row className="px-5 py-3" xxl={2}>
            <Col className="px-2">
            <Card>
                <Card.Title className="px-2 py-2">Atlantic</Card.Title>
                <Card.Subtitle className="mb-2 px-2 text-muted">  Below is a list of teams from this western division.</Card.Subtitle>
                <Button variant="dark">Boston Bruins</Button>
                <Button variant="primary">Buffalo Sabres</Button>
                <Button variant="danger">Detroit Red Wings</Button>
                <Button variant="danger">Florida Panthers</Button>
                <Button variant="light">Montreal Canadiens</Button>
                <Button variant="danger">Ottawa Senators</Button>
                <Button variant="info">Tampa Bay Lightning</Button>
                <Button variant="primary">Toronto Maple Leafs</Button>
            </Card>
            </Col>
            <Col className="px-2">
            <Card>
                <Card.Title className="px-2 py-2">Metropolitan</Card.Title>
                <Card.Subtitle className="mb-2 px-2 text-muted">  Below is a list of teams from this western division.</Card.Subtitle>
                <Button variant="danger">Carolina Hurricanes</Button>
                <Button variant="info">Columbus Blue Jackets</Button>
                <Button variant="danger">New Jersey Devils</Button>
                <Button variant="warning">New York Islanders</Button>
                <Button variant="primary">New York Rangers</Button>
                <Button variant="info">Philadelphia Flyers</Button>
                <Button variant="dark">Pittsburgh Penguins</Button>
                <Button variant="danger">Washington Capitals</Button>
            </Card>
            </Col>
        </Row>
        <Row className="px-5 py-3" xxl={2}>
            <Col className="px-2">
            <Card>
                <Card.Title className="px-2 py-2">Central</Card.Title>
                <Card.Subtitle className="mb-2 px-2 text-muted">  Below is a list of teams from this eastern division.</Card.Subtitle>
                <Button variant="warning">Arizona Coyotes</Button>
                <Button variant="danger">Chicago Blackhawks</Button>
                <Button variant="secondary">Colorado Avalanche</Button>
                <Button variant="success">Dallas Stars</Button>
                <Button variant="success">Minnesota Wild</Button>
                <Button variant="warning">Nashville Predators</Button>
                <Button variant="primary">St. Louis Blues</Button>
                <Button variant="light">Winnipeg Jets</Button>
            </Card>
            </Col>
            <Col className="px-2">
            <Card>
                <Card.Title className="px-2 py-2">Pacific</Card.Title>
                <Card.Subtitle className="mb-2 px-2 text-muted">  Below is a list of teams from this eastern division.</Card.Subtitle>
                <Button variant="warning">Anaheim Ducks</Button>
                <Button variant="danger">Calgary Flames</Button>
                <Button variant="warning">Edmonton Oilers</Button>
                <Button variant="dark">Los Angeles Kings</Button>
                <Button variant="primary">San Jose Sharks</Button>
                <Button variant="dark">Seattle Kraken</Button>
                <Button variant="primary">Vancouver Canucks</Button>
                <Button variant="warning">Vegas Golden Knights</Button>
            </Card>
            </Col>
        </Row>
        </div>
    );
  }
  
  export default Divisions;