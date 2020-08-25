import React from 'react';
import './libraries.css';
import MovieApp from "./Movies/MovieApp"
import AnimeApp from "./Animes/AnimeApp"
import SerieApp from "./Series/SerieApp"
import GameApp from "./Games/GameApp"
import BooksApp from "./Books/BooksApp"


import { Route, Link } from "react-router-dom";

function Library({ match }) {
  return (

    <React.Fragment>
      <ul className="Libraries-menu">
        <li ><Link className="App-link" to={`${match.url}/Books`} ><p>Books</p></Link></li>
        <li ><Link className="App-link" to={`${match.url}/Games`}><p>Games</p></Link></li>
        <li ><Link className="App-link" to={`${match.url}/Movies`}><p>Movies</p></Link></li>
        <li ><Link className="App-link" to={`${match.url}/Series`}><p>Series</p></Link></li>
        <li ><Link className="App-link" to={`${match.url}/Animes`}><p>Animes</p></Link></li>
        <li ><Link className="App-link" to={'/home'}><p>back to home</p></Link></li>
    </ul>
      <Route exact path={`${match.url}/Movies`} component={MovieApp}/>
      <Route exact path={`${match.url}/Animes`} component={AnimeApp}/>
      <Route exact path={`${match.url}/Series`} component={SerieApp}/>
      <Route exact path={`${match.url}/Games`} component={GameApp}/>
      <Route exact path={`${match.url}/Books`} component={BooksApp}/>
    </React.Fragment>
  );
}

export default Library;
