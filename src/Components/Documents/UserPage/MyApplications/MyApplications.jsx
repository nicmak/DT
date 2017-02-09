import React, {Component} from 'react'
import Coverflow from 'react-coverflow'

export default class MyApplications extends Component {
	render () {
		return (
       
    <Coverflow width="960" height="500"
	    displayQuantityOfSide={2}
	    navigation={true}
	    enableScroll={false}
	    clickable={true}
	    active={0}
    >
    <img src='http://decade.it.usf.edu/stpete/lib_modules/InfoCharateristics/ScholarlyArt.png' />
        <img src='http://decade.it.usf.edu/stpete/lib_modules/InfoCharateristics/ScholarlyArt.png' />
    <img src='http://decade.it.usf.edu/stpete/lib_modules/InfoCharateristics/ScholarlyArt.png' />
    <img src='http://decade.it.usf.edu/stpete/lib_modules/InfoCharateristics/ScholarlyArt.png' />

  </Coverflow>
		)
	}
}