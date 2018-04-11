import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const First = (props) => {

  return (<div>
  <h1>Choose a Color</h1>
  <Link to="/second">
  <Button onClick={() => props.addToNavBar('/second', "Name")}>Yellow</Button>
  </Link>
  </div>)
}



export default First
