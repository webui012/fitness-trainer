import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const AchievmentItem = props =>
  <Card>
    <Image src={props.img}/>
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>{props.date}</Card.Meta>
    </Card.Content>
  </Card>

  export default AchievmentItem;
