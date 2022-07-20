import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Container, Accordion, ListGroup } from "react-bootstrap";

function Home() {
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
        <Container>
            <Row>
            <Col xxl={8} className="py-3 px-2">
                <Card>
                    <Card.Img variant="top" src="./statsHOCKEY/assets/cup.jpg" />
                    <Card.Body>
                        <Card.Text>
                            <b>Colorado Avalanche win Stanley Cup Final 4-2 against the Lightning</b><br></br>
                            <p>Both teams were completely burnt out after this show-stopper of a game</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./statsHOCKEY/assets/golf.png" />
                    <Card.Body>
                        <Card.Text>
                            <b>Stamkos and teammates preparing for golf season</b><br></br>
                            <p>"I didn't even want to play the last game, I just wanted to get golfing with the boys" -Steven Stamkos</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./statsHOCKEY/assets/agents.png" />
                    <Card.Body>
                        <Card.Text>
                            <b>Top remaining NHL unrestricted free agents include Kadri, Klingberg</b><br></br>
                            <p>Bergeron, Stastny, Subban also available</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={4}>
            <h1 className="top-headlines">Top Headlines</h1>
            <Accordion className="py-2">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Jack Johnson puts sundae in cup</Accordion.Header>
                    <Accordion.Body>
                    So, on Saturday afternoon on the outskirts of Columbus in a little ice cream shop with 16 
                    parking spaces and a drive-thru, defenseman Jack Johnson turned the Stanley Cup over to his 
                    three children and their friends for a sloppy dessert they'll never forget.<br></br><br></br>

                    "It was cool," Johnson said as he looked on while 6-year-old Jacklin; Ty, four; and Tommy, 
                    two, were among other eager kids inhaling ice cream covered in chocolate topping and whipped 
                    cream as onlookers took photos and videos inside Dell's Ice Cream and Coffee. "I promised my 
                    kids, gosh, I don't know long ago, that if I ever won, we'd eat ice cream out of the Stanley Cup.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Flames file for salary arbitration with Tkachuk</Accordion.Header>
                    <Accordion.Body>
                    Forward had NHL career-high 104 points last season, can't receive offer sheet<br></br><br></br>

                    The Calgary Flames filed for club-elected salary arbitration with Matthew Tkachuk on Monday.
                    By doing so, Tkachuk, a restricted free agent, is unable to receive an offer sheet from another team.
                    The 24-year-old forward set NHL career highs in 42 goals, 62 assists and 104 points in 82 games 
                    last season. He was tied for ninth in the League in goals, tied for 11th in assists, eighth in points, <br></br><br></br>
                    and fourth in plus/minus ending with plus-57.
                    Tkachuk also had 10 points with four goals and six assists in 12 games in the Stanley Cup Playoffs, when the 
                    Flames were eliminated by the Edmonton Oilers in five games in the Western Conference Second Round.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Sekera retires from NHL after 16 seasons</Accordion.Header>
                    <Accordion.Body>
                    Andrej Sekera retired from the NHL on Monday after 16 seasons.<br></br><br></br>

                    The 36-year-old defenseman had four points with one goal and three assists in 32 regular-season games with the 
                    Dallas Stars last season. He was an unrestricted free agent after completing a two-year, $3 million contract 
                    he signed with the Stars on Oct. 4, 2020.<br></br><br></br>

                    "My hockey career is over," Sekera told the Slovakia newspaper SME. "I've had some offers as a free agent, 
                    but still I decided to quit. A big reason was my son had had some medical issues during the last year. After 
                    everything we went through, I realized the best would be if I devoted more time to my family. I thought maybe 
                    it would turn around somehow, but that did not happen."
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br></br><br></br>
            <h1 className="top-headlines">Roster Changes</h1>
            <ListGroup variant="flush">
            <ListGroup.Item>Fiala [Minnesota Wild] to [Los Angeles Kings]</ListGroup.Item>
            <ListGroup.Item>Dadonov [Montreal Canadiens] to [Las Vegas Golden Knights] for Weber</ListGroup.Item>
            <ListGroup.Item>Bishop [Dallas Stars] to [Buffalo Sabres]</ListGroup.Item>
            <ListGroup.Item>Letunov [Carolina Hurricanes] to [New York Rangers]</ListGroup.Item>
            </ListGroup>
            </Col>
            </Row>
        </Container>
        </div>
        /* <div>
            code graveyard

            <p>Home</p>
            <button onClick={() => {navigate("/Divisions")}}>Divisions</button>
            <button onClick={() => {navigate("/Graphs")}}>Graphs</button>
            <button onClick={() => {navigate("/Offers")}}>Offers</button>
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Divisions</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Graphs</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Offers</a></li>
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>

        </div> */
    );
  }
  
  export default Home;