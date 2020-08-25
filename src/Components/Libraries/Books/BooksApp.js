import React ,{useState} from 'react';
import List from '../List';
import BooksData from './BooksData';
import Search from "../Search.js";

function BooksApp() {
  const [title , setTitle] = useState("");
  return (
    <React.Fragment>
      <Search Searcher={setTitle} />
      <List data={BooksData} keyword={title} />
    </React.Fragment>
  );
}

export default BooksApp;
