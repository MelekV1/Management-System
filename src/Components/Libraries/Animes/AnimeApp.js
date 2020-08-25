import React ,{useState} from 'react';
import List from '../List';
import AnimesData from './AnimeData';
import Search from "../Search.js";

function AnimeApp() {
  const [title , setTitle] = useState("");
  return (
    <React.Fragment>
      <Search Searcher={setTitle} />
      <List data={AnimesData} keyword={title} />
    </React.Fragment>
  );
}

export default AnimeApp;
