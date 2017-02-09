import React, {Component} from 'react'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionFace from 'material-ui/svg-icons/action/face'
import ActionDescription from 'material-ui/svg-icons/action/description'
import ActionFeedback from 'material-ui/svg-icons/action/feedback'


import CommunicationMessage from 'material-ui/svg-icons/communication/message'
import {blue500} from 'material-ui/styles/colors';
import {ListItem} from 'material-ui/List'

const iconStyles = {
	marginRight:24,
	color:blue500,
	height:40,
	width:40
}
export default class Menu extends Component {
	render() {
		return(

		<div>
		  <ListItem 
			  href='/' 
			  primaryText="Home" 
			  leftIcon={<ActionHome/>} 
		  />
		  <ListItem 
			  onClick={()=>{this.props.toggleChildren("Profile")}} 
			  primaryText="Profile" 
			  leftIcon={<ActionFace/>} 
		  />
		  <ListItem 
		    onClick={()=>{this.props.toggleChildren("Notifications")}} 
			  primaryText="Notifications" 
			  leftIcon={<ActionFeedback/>} 
		  />
		  <ListItem 
		    onClick={()=>{this.props.toggleChildren("Messages")}} 
		    primaryText="Messages" 
		    leftIcon={<CommunicationMessage/>} />
		  <ListItem 
			  onClick={()=>{this.props.toggleChildren("Application")}} 
			  primaryText="Application" 
			  leftIcon={<ActionDescription/>} />
		</div>
     
		)
	}
}