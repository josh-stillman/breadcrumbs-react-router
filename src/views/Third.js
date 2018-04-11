import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Third = (props) => {

  return (<div>
  <h1>Choose a Location</h1>
    <Button onClick={() => alert("Hooray, party at Neil's house and the offial color is yellow!!!!!!!")}>Neil's house</Button>
  </div>)
}



export default Third
