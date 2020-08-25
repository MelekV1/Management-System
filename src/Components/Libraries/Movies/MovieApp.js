import React ,{useState} from 'react';
import List from '../List';
import moviesData from './MovieData';
import Search from "../Search.js";

function MovieApp() {
  const [title , setTitle] = useState("");
  return (
    <React.Fragment>
      <Search Searcher={setTitle} />
      <List data={moviesData} keyword={title} />
    </React.Fragment>
  );
}

export default MovieApp;
