import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import {SelectField, TextField} from 'redux-form-material-ui'



// const mapStateToProps = (state) => {
//  return {
//    selectFieldValue: state.selectFieldReducer.value
//  }
// }

// const mapDispatchToProps = (dispatch) => {
//  return {
//    handleChange:(value) => {
//      console.log('Look here', value)
//      dispatch({
//        type:"SELECT_FIELD",
//        payload: {
//          value:value
//        }
//      })
//    }
//  }
// }
const renderSelectField = props => (
  <SelectField
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
    onChange={(event, index, value) => props.onChange(value)}
  >
  </SelectField>
)


const ProfileTextField = props => {
  const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <h2>Medical School</h2>
        <Field
          name="Field"
          hintText='Medical School'
          component={renderSelectField}
        >
          <MenuItem value={0} primaryText="None"/>
        </Field>
      </form>

    )
}

  


const ProfileTexField = reduxForm({
  form: 'ProfileTextField'
})(ProfileTextField)

export default ProfileTexField
