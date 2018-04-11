import React from 'react'
import {Breadcrumb} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

  let content = []
  for (let i = 0; i < props.nav.length; i++) {
    if (i + 1 === props.nav.length) {
      content.push(<Breadcrumb.Section as={NavLink}  onClick={() => props.rollBackNavBar(i)} to={props.nav[i][0]}>{props.nav[i][1]}</Breadcrumb.Section>)
    } else {
      content.push(<React.Fragment><Breadcrumb.Section as={NavLink} onClick={() => props.rollBackNavBar(i)} to={props.nav[i][0]}>{props.nav[i][1]}</Breadcrumb.Section><Breadcrumb.Divider /></React.Fragment>)
    }
  }


return (<Breadcrumb size="massive">
    {content}
    </Breadcrumb>)
}

export default NavBar
