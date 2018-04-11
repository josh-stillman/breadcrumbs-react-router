import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Second = (props) => {

  return (<div>
  <h1>Choose a Name</h1>
  <Link to="/third">
  <Button onClick={() => props.addToNavBar('/third', "Location")}>Neil</Button>
  </Link>
  </div>)
}



export default Second
