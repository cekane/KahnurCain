import React from 'react'

import { display } from './WorkDisplay.scss'
import { Button } from '../Button'
import className from 'classnames'

export class WorkDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className={ display }>
        <center><h1>Windrush</h1></center>
        <h2>What I did</h2>
        <p>Stuff I promise</p>
        <h2>Skills gained</h2>
        <p>A bunch of different skils</p>
        <h2>Projects</h2>
        <ul>
          <ol>Project 1</ol>
          <ol>Project 2</ol>
        </ul>
        <h2>Takeaways</h2>
        <p>Tons of different takeaways</p>
      </div>
    )
  }
}