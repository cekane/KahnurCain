import React from 'react'

import { imageStyle, container } from './WorkItem.scss'
import { Button } from '../Button'
import className from 'classnames'

export class WorkItem extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    var path = "../../images/" + this.props.image;
    return (
      <div className={ container }>
        <img className={ imageStyle } src={path}/>
      </div>
    )
  }
}