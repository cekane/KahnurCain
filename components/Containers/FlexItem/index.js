import React from 'react'

import { flexStyleSmall, flexStyleMedium, flexStyleLarge} from './FlexItem.scss'
import className from 'classnames'

export class FlexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    var size = '';
    switch(this.props.size){
      case 'small':
        size = flexStyleSmall;
        break;
      case 'medium':
        size = flexStyleMedium;
        break;
      case 'large':
        size = flexStyleLarge;
        break;
    }

    return (
      <div className={ size }>
        { this.props.children }
      </div>
    )
  }
}