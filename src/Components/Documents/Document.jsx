import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import Menu from './Menu'
import { connect } from 'react-redux'
import { showChildren } from '../../Actions/showChildrenActions'
import Profile from './UserPage/Profile/Profile'
import Application from './Application/Application'
import Notifications from './Notification/Notification'
import Messages from './Messages/Messages'
import  '../../Styles/document-container.css'

const mapStateToProps = (state) => {
  return {
  	childReducer:state.childReducer,
  }
}
const mapDispatchToProps = (dispatch) => {
	return {
		toggle_children: (component) => {
			dispatch(showChildren(component))
		}
	}
}
const componentName = (component) => {
	switch(component) {
			case 'Profile': {
				return <Profile/>
			}
			case 'Notifications': {
				return <Notifications/>
			}
			case 'Messages': {
				return <Messages/>
			}
			case 'Application': {
				return <Application/>
			}
	}
}
class Document extends Component {
	render () {
		return (
		<div className="document-container">
		  <Drawer className="drawer" open={true} containerStyle={{top:64}}>
		    <Menu toggleChildren={this.props.toggle_children}/>
		  </Drawer>
		  {
        this.props.childReducer.open ?	
        componentName(this.props.childReducer.component)
		    :null
		  }
		</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Document)




