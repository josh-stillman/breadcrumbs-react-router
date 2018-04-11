import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Third = (props) => {

  return (<div>
  <h1>Choose a Location</h1>
  <Link to="/first">
  <Button onClick={props.sayHello}>Neil's house</Button>
  </Link>
  </div>)
}



export default Third
