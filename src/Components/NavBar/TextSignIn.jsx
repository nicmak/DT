import React, { Component } from 'react'
import TextField from 'material-ui/TextField'


export default class InputText extends Component {

render() {
	return (
		<div>
	    <TextField
	      hintText="Email"
	      floatingLabelText="Email"
	    />
	    <br/>
	    <TextField
	      hintText="Password"
	      floatingLabelText="Password"
	      type="password"
	    />
	  </div>

	)
}

}