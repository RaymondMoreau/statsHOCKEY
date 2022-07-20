import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Divisions from './Divisions.js';
import Islanders from './Islanders.js';
import Hurricanes from './Hurricanes.js';
import BlueJackets from './BlueJackets.js';
import Devils from './Devils.js';
import Rangers from './Rangers.js';
import Flyers from './Flyers.js';
import Penguins from './Penguins.js';
import Capitals from './Capitals.js';
import Ducks from './Ducks.js';
import Flames from './Flames.js';
import Oilers from './Oilers.js';
import Kings from './Kings.js';
import Sharks from './Sharks.js';
import Kraken from './Kraken.js';
import Canucks from './Canucks.js';
import GoldenKnights from './GoldenKnights.js';
import Bruins from './Bruins.js';
import Sabres from './Sabres.js';
import RedWings from './RedWings.js';
import Panthers from './Panthers.js';
import Canadiens from './Canadiens.js';
import Senators from './Senators.js';
import Lightning from './Lightning.js';
import MapleLeafs from './MapleLeafs.js';
import Coyotes from './Coyotes.js';
import BlackHawks from './BlackHawks.js';
import Avalanche from './Avalanche.js';
import Stars from './Stars.js';
import Wild from './Wild.js';
import Predators from './Predators.js';
import Blues from './Blues.js';
import Jets from './Jets.js';
import Graphs from './Graphs.js';
import Offers from './Offers.js';
import GraphTwo from './GraphTwo.js';
import GraphThree from './GraphThree.js';
import GraphFour from './GraphFour.js';
import GraphFive from './GraphFive.js';
import FrenchHome from './FrenchHome.js';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/statsHOCKEY" element={<Home />} />
          <Route path="/Divisions" element={<Divisions />} />
          <Route path="/Graphs" element={<Graphs />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/GraphTwo" element={<GraphTwo />} />
          <Route path="/GraphThree" element={<GraphThree />} />
          <Route path="/GraphFour" element={<GraphFour />} />
          <Route path="/GraphFive" element={<GraphFive />} />
          <Route path="/FrenchHome" element={<FrenchHome />} />
        </Routes>
    </Router>
  );
}

export default App;
