import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import PostList from './PostList/PostList'
import MyApplications from '../MyApplications/MyApplications'
import {showEditProfile} from '../../../../Actions/showEditProfile'
import EditProfile from './EditProfile/EditProfile'
import PictureContainer from './Profile-header/Picture-Container'
import '../../../../Styles/Profile/Profile.css'

const mapStateToProps = (state) => {
	return {
    EditProfileReducer: state.EditProfileReducer
	}
}
const mapDispatchToProps = (dispatch) => {
  return {
  	toggle_editProfile: () => {
  		dispatch(showEditProfile())
  	}
  }
}

class Profile extends Component {
	render() {
		return (
      <section className="child">
	      <div className='Profile-container'>
	        <Tabs> 
	          <Tab label='Profile'>
	            <section className="Profile-container">
					        <div className="Pic-container">
						          <PictureContainer
			                  toggle_editProfile={this.props.toggle_editProfile}
						          />  
						          <EditProfile
			                  EditProfileReducer={this.props.EditProfileReducer}
			                  toggle_editProfile={this.props.toggle_editProfile}
					            />
					        </div>
					        <div className="post-container">
							        <TextField
							          className="Post-Message"
							          hintText="Write a message"
							          floatingLabelText="What is going on"
							          fullWidth={true}
							          multiLine={true}
							        />
							        <RaisedButton
						            className="Post-button"
						            label='Post'
						            primary={true}
							        />
							        <div className="Post-List">
							          <PostList/>
							        </div>
					        </div>
				      </section>
			      </Tab>
	          <Tab label='My Applications'>
              <MyApplications/>
	          </Tab>
			      <Tab label='Groups'/>
			      <Tab label='Colleagues'/>
		      </Tabs>
		    </div>
      </section>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)