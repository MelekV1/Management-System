import React from 'react';
import Card from './Card'
import "./AppsCss.css"

export default function List({keyword,data}){
  return(
    <div className="CardsWrapper">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
      {(keyword==='')?
        data.map( (el,i) => <Card key={i} getinfo={el}/> ) :(
        data
          .filter( (el)=>  el.title.toLowerCase().includes(keyword.toLowerCase().trim()))
          .map( (el,i) =>  <Card key={i} getinfo={el}/> ))}
      </div>
    </div>
  )
}
