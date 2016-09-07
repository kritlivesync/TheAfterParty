// dependencies
import React, { Component } from 'react';
import {
  StyleSheet,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';



// component
export default class StoryList extends Component {
  constructor(props) {
    super(props);
    this.ds = ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: this.ds.cloneWithRows(fakeStories),
    };
  }

  renderSingleStory(story) {
    return(
      <View>
        <Text>{story.title}</Text>
        <Text>{story.body}</Text>
        <Text>Upvotes: {story.upvotes}</Text>
        <Text>Confirms: {story.confirms}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
