import React  from 'react';
import './App.css';
import MyLibrary from "./Components/MyLibrary"
import Home from "./Components/Home"
import Library from "./Components/Libraries/Library";
import List from "./Components/Lists/Lists";
import { Route, Link ,Switch} from "react-router-dom";

function App() {

  return (

      <div className="body">
        <div className="sidebar" >
          <ul className="menu">
            <li ><Link className="App-link" to="/Home" ><p>Home</p></Link></li>
            <li ><Link className="App-link" to="/About"><p>About the App</p></Link></li>
            <li ><Link className="App-link" to="/Libraries"><p>My Libraries</p></Link></li>
            <li ><Link className="App-link" to="/Lists"><p>My lists</p></Link></li>
          </ul>
      </div>
      <div className="content" >
        <Switch>
          <Route exact path="/Home" component={Home}></Route>
          <Route path="/About" component={MyLibrary}></Route>
          <Route path="/Libraries" component={Library}></Route>
          <Route path="/Lists" component={List}></Route>

        </Switch>

      </div>

    </div>
  );
}

export default App;
