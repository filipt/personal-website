import React from 'react'
import './tile.css'

{/* Template */}

    
const Tile = ( { data }  ) => (
  <div className="tile">
    <h3>{ data.title }</h3>
      <h5>{ data.subtitle } </h5>
      <h5>{ data.date_range }</h5>
      <img src =  {data.image_link}  className = "projectImage" />
      <p>{ data.description }</p>
  </div>
);

export default Tile;

