import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import TextSignIn from './TextSignIn'
import TextRegister from './TextRegister'
import * as actions from '../../Actions/NavBarActions'
import '../../Styles/NavBar/NavBar.css'

const mapStateToProps = (state) => {
  return {
    Dialog: state.Dialog
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    openDialog_SignIn: () => {
      dispatch(actions.Open_SignIn_Dialog())
    },
    closeDialog_SignIn: () => {
      dispatch(actions.Close_SignIn_Dialog())
    },
    openDialog_Register: () => {
      dispatch(actions.Open_Register_Dialog())
    },
    closeDialog_Register: () => {
      dispatch(actions.Close_Register_Dialog())
    }
  }
}

const styles = {
  buttons: {
    color:'white'
  }
}

class NavBar extends Component {
  render() {    
    const leftElements = (
      <div className="Title-logo">
        DocTalk
      </div>
    )
    const rightElements = (
      <div className="NavBar-Buttons">
        <FlatButton 
          label='Sign in' 
          labelStyle={styles.buttons}
          onClick={this.props.openDialog_SignIn}
        />
        <FlatButton 
          label='Create Account' 
          labelStyle={styles.buttons}
          onClick={this.props.openDialog_Register}

        />
      </div>
    )

    const actionsSignInDialog = [
      <FlatButton 
        label="Close"
        onClick={this.props.closeDialog_SignIn}
      />

    ]
    const actionsRegisterDialog = [
      <FlatButton 
        label="Close"
        onClick={this.props.closeDialog_Register}
      />

    ]
    const openSignInBoolean = this.props.Dialog.open
    const openRegBoolean = this.props.Dialog.openReg
    
    return (
      <div>
        <AppBar
          className="NavBar"
          showMenuIconButton={false}
          title={leftElements}
          iconElementRight={rightElements}
        />
        <Dialog
          title="Sign in "
          open={openSignInBoolean}
          actions={actionsSignInDialog}
          autoScrollBodyContent={true}
        >
          <TextSignIn/>
        
        </Dialog>
        <Dialog
          title="Create Account"
          open={openRegBoolean}
          actions={actionsRegisterDialog}
        >
          <TextRegister/>
        </Dialog>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar) 

