import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Container, Accordion, ListGroup, Button } from "react-bootstrap";

function FrenchHome() {
    let navigate = useNavigate();
    return (
        <div>
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span class="fs-4">statsHOCKEY</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item"><button onClick={() => {navigate("/statsHOCKEY")}}>Maison</button></li>
                    <li class="nav-item"><button onClick={() => {navigate("/Divisions")}}>Divisions</button></li>
                    <li class="nav-item"><button onClick={() => {navigate("/Graphs")}}>Graphiques</button></li>
                    <li class="nav-item"><button onClick={() => {navigate("/Offers")}}>Offres</button></li>
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
                            <b>Colorado Avalanche ont gagné le Stanley Cup Final 4-2 contre le Lightning</b><br></br>
                            <p>Les deux équipes était complètement fatigué après cet jeu</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./statsHOCKEY/assets/golf.png" />
                    <Card.Body>
                        <Card.Text>
                            <b>Stamkos et son équipe preparent pour la saison de golf</b><br></br>
                            <p>"Je ne voulait même pas jouer la dernière jeu, je voulait seulement aller jouer du golf avec les gars" -Steven Stamkos</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./statsHOCKEY/assets/agents.png" />
                    <Card.Body>
                        <Card.Text>
                            <b>Beaucoup de top agents libres sans restrictions inclut Kadri, Klingberg</b><br></br>
                            <p>Bergeron, Stastny, Subban sont aussi disponible</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={4}>
            <h1 className="top-headlines">Gros titres</h1>
            <Accordion className="py-2">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Jack Johnson met le sundae dans Stanley</Accordion.Header>
                    <Accordion.Body>
                    Ainsi, le samedi après-midi à la périphérie de Columbus dans un petit magasin de crème glacée avec 16
                    places de stationnement et un service au volant, le défenseur Jack Johnson a remis la Coupe Stanley à son
                    trois enfants et leurs amis pour un dessert bâclé qu'ils n'oublieront jamais.<br></br><br></br>

                    "C'était cool", a déclaré Johnson en regardant Jacklin, 6 ans; Ty, quatre ; et Tommy,
                    deux, étaient parmi d'autres enfants impatients d'inhaler de la crème glacée recouverte de garniture au chocolat et fouettée
                    crème pendant que les spectateurs prenaient des photos et des vidéos à l'intérieur de Dell's Ice Cream and Coffee. "J'ai promis mon
                    les enfants, ça alors, je ne sais pas il y a longtemps, que si jamais je gagnais, nous mangerions de la crème glacée de la Coupe Stanley.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Les Flames demandent un arbitrage salarial avec Tkachuk</Accordion.Header>
                    <Accordion.Body>
                    L'attaquant a atteint un sommet en carrière dans la LNH avec 104 points la saison dernière, ne peut pas recevoir la feuille d'offre<br></br><br></br>

                    Les Flames de Calgary ont demandé lundi un arbitrage salarial élu par le club avec Matthew Tkachuk.
                    Ce faisant, Tkachuk, un agent libre restreint, est incapable de recevoir une feuille d'offre d'une autre équipe.
                    L'attaquant de 24 ans a établi des sommets en carrière dans la LNH avec 42 buts, 62 passes et 104 points en 82 matchs.
                    la saison dernière. Il était à égalité au neuvième rang de la Ligue pour les buts, au 11e rang pour les passes décisives, au huitième rang pour les points,
                    et quatrième en plus/moins se terminant par plus-57. <br></br><br></br>
                    Tkachuk a également récolté 10 points avec quatre buts et six passes en 12 matchs dans les séries éliminatoires de la Coupe Stanley, lorsque le
                    Les Flames ont été éliminés par les Oilers d'Edmonton en cinq matchs au deuxième tour de l'Association de l'Ouest.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Sekera prend sa retraite de la LNH après 16 saisons</Accordion.Header>
                    <Accordion.Body>
                    Andrej Sekera a pris sa retraite de la LNH lundi après 16 saisons.<br></br><br></br>

                    Le défenseur de 36 ans a amassé quatre points, un but et trois passes en 32 matchs de saison régulière avec le
                    Stars de Dallas la saison dernière. Il était un agent libre sans restriction après avoir terminé un contrat de 3 millions de dollars sur deux ans
                    il a signé avec les Stars le 4 octobre 2020.<br></br><br></br>

                    "Ma carrière de hockeyeur est terminée", a déclaré Sekera au journal slovaque SME. "J'ai eu des offres en tant qu'agent libre,
                    mais j'ai quand même décidé d'arrêter. Une grande raison était que mon fils avait eu des problèmes médicaux au cours de la dernière année. Après
                    tout ce que nous avons traversé, j'ai réalisé que le mieux serait si je consacrais plus de temps à ma famille. j'ai pensé peut-être
                    cela se retournerait d'une manière ou d'une autre, mais cela ne s'est pas produit."
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br></br><br></br>
            <h1 className="top-headlines">Modifications de la liste</h1>
            <ListGroup variant="flush">
            <ListGroup.Item>Fiala [Minnesota Wild] à [Los Angeles Kings]</ListGroup.Item>
            <ListGroup.Item>Dadonov [Montreal Canadiens] à [Las Vegas Golden Knights] pour Weber</ListGroup.Item>
            <ListGroup.Item>Bishop [Dallas Stars] à [Buffalo Sabres]</ListGroup.Item>
            <ListGroup.Item>Letunov [Carolina Hurricanes] à [New York Rangers]</ListGroup.Item>
            </ListGroup>
            <div className='text-center py-5'>
            <Button variant="dark" size="lg" onClick={() => {navigate("/statsHOCKEY")}}>
                English?
            </Button>
            </div>
            </Col>
            </Row>
        </Container>
        </div>
    );
  }
  
  export default FrenchHome;