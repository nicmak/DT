import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
// import ProfileTextField from './ProfileTextField'
import MaterialUiForm from './materialUItext'


// const mapStateToProps = (state) => {
// 	return {
// 		selectFieldValue: state.selectFieldReducer.value
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		handleChange:(value) => {
// 			console.log('Look here', value)
// 			dispatch({
// 				type:"SELECT_FIELD",
// 				payload: {
// 					value:value
// 				}
// 			})
// 		}
// 	}
// }


export default class EditProfile extends Component {
	render() {
		const editProfileAction = [
	    <FlatButton
	      label='Close'
	      onClick={this.props.toggle_editProfile}
	    />,
	    <FlatButton
	      label='Submit'
	    />
    ]
		return (
      <Dialog
        title='Edit Profile'
        open={this.props.EditProfileReducer.open}
        actions={editProfileAction}
        autoScrollBodyContent={true}
        
      >
        <MaterialUiForm
        />
      </Dialog>
		)
	}
}

