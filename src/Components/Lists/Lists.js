import React from "react"
import TodoApp from './TodoApp/TodoApp'
import "./ListAppsCss.css"
import { Route, Link } from "react-router-dom";

function List({ match }) {
  return (

    <React.Fragment>
      <ul className="List-menu">
        <li ><Link className="App-link" to={`${match.url}/To-do-List`} ><p>TodoList</p></Link></li>
        <li ><Link className="App-link" to={'/home'}><p>back to home</p></Link></li>
      </ul>
      <Route exact path={`${match.url}/To-do-List`} component={TodoApp}/>
    </React.Fragment>
  );
}

export default List
