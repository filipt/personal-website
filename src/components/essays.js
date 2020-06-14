import React, { Component } from 'react'

import  Tile  from './templates/tile'
import data from "./data/essays"

export default class Essays extends Component {
  render(){
    return(
      <div className = "container placement">
        {data.map((essay) => (
          <Tile
            data={essay}
          />  
        ))}
      </div>
    )
  }
}
    
