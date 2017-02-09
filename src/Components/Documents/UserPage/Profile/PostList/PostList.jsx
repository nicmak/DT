import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';



export default class PostList extends Component {

	render () {
		return (
      <List>
        <ListItem
          leftAvatar={<Avatar src="https://unavitavagabonda.files.wordpress.com/2015/04/brennan_j.jpg" />}
          primaryText="Just Found New Article on Advair 2017"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Sammy Samson</span> --
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="http://machohairstyles.com/wp-content/uploads/2015/12/asian_hairstyles_11.jpg" />}
          primaryText="Side Effects in using Beta-Blockers in patients 65 & over"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Brendan Lim</span> --
                According to FDA, article 'Beta-Blockers ~ Consequences'...
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />

        <ListItem
          leftAvatar={<Avatar src="https://unavitavagabonda.files.wordpress.com/2015/04/brennan_j.jpg" />}
          primaryText="Just Found New Article on Advair 2017"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Sammy Samson</span> --
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
                <Divider inset={true} />

        <ListItem
          leftAvatar={<Avatar src="https://unavitavagabonda.files.wordpress.com/2015/04/brennan_j.jpg" />}
          primaryText="Just Found New Article on Advair 2017"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Sammy Samson</span> --
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
      </List>

		)
	}
}