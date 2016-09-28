import React from 'react';
import { Button } from './Button'
import { Row } from './Containers/Row'
import { CommentBox } from './CommentBox'
import { Background } from './Containers/Background'
import { StyleContainer } from './Containers/StyleContainer'
import { FlexContainer } from './Containers/FlexContainer'
import { FlexItem } from './Containers/FlexItem'
import { Navbar } from './Navbar'
import { NavbarButton } from './NavbarButton'
import { Foreground } from './Foreground'
import { WorkItem } from './WorkItem'
import { WorkDisplay } from './WorkDisplay'

import { BodyFront } from './BodyFront'

export class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Background>
        </Background>
        <Navbar>
          <NavbarButton color={ "limeGreen" } link={ "http://localhost:4444/index.html#SleepyingBeauty" }>Home</NavbarButton>
          <NavbarButton color={ "white" } link={ "http://localhost:4444/index.html#SleepyingBeauty2" }>Work</NavbarButton>
          <NavbarButton color={ "white" } link={"http://localhost:4444/work.html" }>Blog</NavbarButton>
        </Navbar>
          
          <Foreground name={"SleepyingBeauty"} color={ "clear" } />
          <Foreground name={"SleepyingBeauty2"} color={ "white" } >
          <FlexContainer>
            <FlexItem size={ "small" }>
              <WorkItem image={ "tech4kidz.jpg" } />
              <WorkItem image={ "windrush.png" } />
              <WorkItem image={ "github.png" } />
              <WorkItem image={ "3m.jpg" } />
            </FlexItem>
            <FlexItem size={ "large" }>
              <WorkDisplay/>
            </FlexItem>
          </FlexContainer>
          </Foreground>
        


          
        
      </div>
    );
  }
}
