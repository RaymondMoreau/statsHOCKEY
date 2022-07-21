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
                <Button variant="dark" onClick={() => {navigate("/Bruins")}}>Boston Bruins</Button>
                <Button variant="primary" onClick={() => {navigate("/Sabres")}}>Buffalo Sabres</Button>
                <Button variant="danger" onClick={() => {navigate("/RedWings")}}>Detroit Red Wings</Button>
                <Button variant="danger" onClick={() => {navigate("/Panthers")}}>Florida Panthers</Button>
                <Button variant="light" onClick={() => {navigate("/Canadiens")}}>Montreal Canadiens</Button>
                <Button variant="danger" onClick={() => {navigate("/Senators")}}>Ottawa Senators</Button>
                <Button variant="info" onClick={() => {navigate("/Lightning")}}>Tampa Bay Lightning</Button>
                <Button variant="primary" onClick={() => {navigate("/MapleLeafs")}}>Toronto Maple Leafs</Button>
            </Card>
            </Col>
            <Col className="px-2">
            <Card>
                <Card.Title className="px-2 py-2">Metropolitan</Card.Title>
                <Card.Subtitle className="mb-2 px-2 text-muted">  Below is a list of teams from this western division.</Card.Subtitle>
                <Button variant="danger" onClick={() => {navigate("/Hurricanes")}}>Carolina Hurricanes</Button>
                <Button variant="info" onClick={() => {navigate("/BlueJackets")}}>Columbus Blue Jackets</Button>
                <Button variant="danger" onClick={() => {navigate("/Devils")}}>New Jersey Devils</Button>
                <Button variant="warning" onClick={() => {navigate("/Islanders")}}>New York Islanders</Button>
                <Button variant="primary" onClick={() => {navigate("/Rangers")}}>New York Rangers</Button>
                <Button variant="info" onClick={() => {navigate("/Flyers")}}>Philadelphia Flyers</Button>
                <Button variant="dark" onClick={() => {navigate("/Penguins")}}>Pittsburgh Penguins</Button>
                <Button variant="danger" onClick={() => {navigate("/Capitals")}}>Washington Capitals</Button>
            </Card>
            </Col>
        </Row>
        <Row className="px-5 py-3" xxl={2}>
            <Col className="px-2">
            <Card>
                <Card.Title className="px-2 py-2">Central</Card.Title>
                <Card.Subtitle className="mb-2 px-2 text-muted">  Below is a list of teams from this eastern division.</Card.Subtitle>
                <Button variant="warning" onClick={() => {navigate("/Coyotes")}}>Arizona Coyotes</Button>
                <Button variant="danger" onClick={() => {navigate("/BlackHawks")}}>Chicago Blackhawks</Button>
                <Button variant="secondary" onClick={() => {navigate("/Avalanche")}}>Colorado Avalanche</Button>
                <Button variant="success" onClick={() => {navigate("/Stars")}}>Dallas Stars</Button>
                <Button variant="success" onClick={() => {navigate("/Wild")}}>Minnesota Wild</Button>
                <Button variant="warning" onClick={() => {navigate("/Predators")}}>Nashville Predators</Button>
                <Button variant="primary" onClick={() => {navigate("/Blues")}}>St. Louis Blues</Button>
                <Button variant="light" onClick={() => {navigate("/Jets")}}>Winnipeg Jets</Button>
            </Card>
            </Col>
            <Col className="px-2">
            <Card>
                <Card.Title className="px-2 py-2">Pacific</Card.Title>
                <Card.Subtitle className="mb-2 px-2 text-muted">  Below is a list of teams from this eastern division.</Card.Subtitle>
                <Button variant="warning" onClick={() => {navigate("/Ducks")}}>Anaheim Ducks</Button>
                <Button variant="danger" onClick={() => {navigate("/Flames")}}>Calgary Flames</Button>
                <Button variant="warning" onClick={() => {navigate("/Oilers")}}>Edmonton Oilers</Button>
                <Button variant="dark" onClick={() => {navigate("/Kings")}}>Los Angeles Kings</Button>
                <Button variant="primary" onClick={() => {navigate("/Sharks")}}>San Jose Sharks</Button>
                <Button variant="dark" onClick={() => {navigate("/Kraken")}}>Seattle Kraken</Button>
                <Button variant="primary" onClick={() => {navigate("/Canucks")}}>Vancouver Canucks</Button>
                <Button variant="warning" onClick={() => {navigate("/GoldenKnights")}}>Vegas Golden Knights</Button>
            </Card>
            </Col>
        </Row>
        </div>
    );
  }
  
  export default Divisions;