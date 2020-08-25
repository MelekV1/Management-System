import React from 'react'
import "./AppsCss.css"
import Rate from "./Rate"
const Card= ({getinfo:{title,description,posterUrl,trailer,rate}}) =>{
  return(
  <div className ="wrapper">
    <div className="main-content">
      <div className="card-left">
        <div className="poster">
          <img  src={posterUrl} alt="movie Poster"/>
        </div>
      </div>

      <div className="card-right">
        <div className="card-info">
          <div className="rate">
            <Rate rating={rate}/>
          </div>
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
)
}

export default Card
