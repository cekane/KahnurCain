import React from 'react'

import { limeGreen, white, flex } from './NavbarButton.scss'
import { Button } from '../Button'
import className from 'classnames'

export class NavbarButton extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    var color = '';
    switch(this.props.color){
      case 'limeGreen':
        color = limeGreen;
        break;
      case 'white':
        color = white;
        break;
    }

    return (
      <div className={ flex }>
        <a href={this.props.link}>
          <center><h1 className={ color } >{ this.props.children }</h1></center>
        </a>
      </div>
    )
  }
}