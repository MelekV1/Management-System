import React ,{useState} from 'react';
import List from '../List';
import GamesData from './GamesData';
import Search from "../Search.js";

function GameApp() {
  const [title , setTitle] = useState("");
  return (
    <React.Fragment>
      <Search Searcher={setTitle} />
      <List data={GamesData} keyword={title} />
    </React.Fragment>
  );
}

export default GameApp;
