// dependencies
import React, { Component } from 'react';
import {
  StyleSheet,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// component
export default StoryList extends Component {
  constructor(props) {
    super(props);
    this.ds = ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.stories),
    };
  }

  componentWillRecieveProps(nextProps) {
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.stories),
    });
  }

  renderSingleStory(story) {
    return(
      <View>
        <Text>{story.author}</Text>
        <Text>{story.school}</Text>
        <Text>{story.body}</Text>
      </View>
    );
  }

  render() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderSingleStory.bind(this)}
      />
    );
  }
}
