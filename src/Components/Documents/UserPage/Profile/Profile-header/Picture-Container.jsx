import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';


export default class PictureContainer extends Component {
	render() {
		return (
			<div>
      <img src='https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/13226889_10154851823403916_7183107301577068369_n.jpg?oh=07440e5b02ab4e8fe176284a598275cb&oe=58FE4149' />
      <div className='description'>
        <p>Rick Ross</p>
        <p>MD: <a href='http://www.uwo.ca/'> University of Western Ontario</a></p>
        <p> Year of Graduation: 2022</p>
      </div>
      <RaisedButton 
        className='Edit-Profile-Button'
        label='Edit Profile'
        primary={true}
        onClick={this.props.toggle_editProfile}
      />
      </div>
		)
	}
}