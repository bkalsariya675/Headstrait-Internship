import './App.css';
// import Navbar from "./components/Navbar";
// import Body from "./components/Body";
import Home from "./components/Home";
// import CardInfo from './components/CardInfo';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Router>
        {/* <Route path ="/navbar" component ={Navbar}/> */}
        {/* <Route path ="/body" component ={ Body }/> */}
        <Route path ="/" component ={ Home }/>
      </Router>
      </div>
  );
}

export default App;
