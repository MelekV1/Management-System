import React ,{useState} from 'react';
import List from '../List';
import SeriesData from './SeriesData';
import Search from "../Search.js";

function SerieApp() {
  const [title , setTitle] = useState("");
  return (
    <React.Fragment>
      <Search Searcher={setTitle} />
      <List data={SeriesData} keyword={title} />
    </React.Fragment>
  );
}

export default SerieApp;
