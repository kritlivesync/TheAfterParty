// dependencies
import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const fakeStories = [
  {title: 'Post #1', body: 'Maecenas vulputate augue vitae mauris ornare, rutrum placerat velit efficitur. Donec sit amet neque ex. Suspendisse pulvinar ornare urna vitae fringilla. Cras iaculis metus a enim ullamcorper, in venenatis neque sollicitudin. Nunc condimentum a quam vel dapibus. Fusce semper ante at dapibus rhoncus. Morbi id mollis lorem, a dapibus nisl. Aenean sodales semper ligula, ac sodales tellus tempor id. Donec eget dignissim lectus, et dictum leo. Quisque id sollicitudin neque. Nunc fringilla dapibus porttitor.', upvotes: 2, confirms: 2},
  {title: 'Post #2', body: 'Maecenas vulputate augue vitae mauris ornare, rutrum placerat velit efficitur. Donec sit amet neque ex. Suspendisse pulvinar ornare urna vitae fringilla. Cras iaculis metus a enim ullamcorper, in venenatis neque sollicitudin. Nunc condimentum a quam vel dapibus. Fusce semper ante at dapibus rhoncus. Morbi id mollis lorem, a dapibus nisl. Aenean sodales semper ligula, ac sodales tellus tempor id. Donec eget dignissim lectus, et dictum leo. Quisque id sollicitudin neque. Nunc fringilla dapibus porttitor.', upvotes: 5, confirms: 3},
  {title: 'Post #3', body: 'Maecenas vulputate augue vitae mauris ornare, rutrum placerat velit efficitur. Donec sit amet neque ex. Suspendisse pulvinar ornare urna vitae fringilla. Cras iaculis metus a enim ullamcorper, in venenatis neque sollicitudin. Nunc condimentum a quam vel dapibus. Fusce semper ante at dapibus rhoncus. Morbi id mollis lorem, a dapibus nisl. Aenean sodales semper ligula, ac sodales tellus tempor id. Donec eget dignissim lectus, et dictum leo. Quisque id sollicitudin neque. Nunc fringilla dapibus porttitor.', upvotes: 1, confirms: 0},
  {title: 'Post #4', body: 'Maecenas vulputate augue vitae mauris ornare, rutrum placerat velit efficitur. Donec sit amet neque ex. Suspendisse pulvinar ornare urna vitae fringilla. Cras iaculis metus a enim ullamcorper, in venenatis neque sollicitudin. Nunc condimentum a quam vel dapibus. Fusce semper ante at dapibus rhoncus. Morbi id mollis lorem, a dapibus nisl. Aenean sodales semper ligula, ac sodales tellus tempor id. Donec eget dignissim lectus, et dictum leo. Quisque id sollicitudin neque. Nunc fringilla dapibus porttitor.', upvotes: 0, confirms: 2},
  {title: 'Post #5', body: 'Maecenas vulputate augue vitae mauris ornare, rutrum placerat velit efficitur. Donec sit amet neque ex. Suspendisse pulvinar ornare urna vitae fringilla. Cras iaculis metus a enim ullamcorper, in venenatis neque sollicitudin. Nunc condimentum a quam vel dapibus. Fusce semper ante at dapibus rhoncus. Morbi id mollis lorem, a dapibus nisl. Aenean sodales semper ligula, ac sodales tellus tempor id. Donec eget dignissim lectus, et dictum leo. Quisque id sollicitudin neque. Nunc fringilla dapibus porttitor.', upvotes: 7, confirms: 9},
  {title: 'Post #6', body: 'Maecenas vulputate augue vitae mauris ornare, rutrum placerat velit efficitur. Donec sit amet neque ex. Suspendisse pulvinar ornare urna vitae fringilla. Cras iaculis metus a enim ullamcorper, in venenatis neque sollicitudin. Nunc condimentum a quam vel dapibus. Fusce semper ante at dapibus rhoncus. Morbi id mollis lorem, a dapibus nisl. Aenean sodales semper ligula, ac sodales tellus tempor id. Donec eget dignissim lectus, et dictum leo. Quisque id sollicitudin neque. Nunc fringilla dapibus porttitor.', upvotes: 9, confirms: 4},
  {title: 'Post #7', body: 'Maecenas vulputate augue vitae mauris ornare, rutrum placerat velit efficitur. Donec sit amet neque ex. Suspendisse pulvinar ornare urna vitae fringilla. Cras iaculis metus a enim ullamcorper, in venenatis neque sollicitudin. Nunc condimentum a quam vel dapibus. Fusce semper ante at dapibus rhoncus. Morbi id mollis lorem, a dapibus nisl. Aenean sodales semper ligula, ac sodales tellus tempor id. Donec eget dignissim lectus, et dictum leo. Quisque id sollicitudin neque. Nunc fringilla dapibus porttitor.', upvotes: 10, confirms: 6},
  {title: 'Post #8', body: 'Maecenas vulputate augue vitae mauris ornare, rutrum placerat velit efficitur. Donec sit amet neque ex. Suspendisse pulvinar ornare urna vitae fringilla. Cras iaculis metus a enim ullamcorper, in venenatis neque sollicitudin. Nunc condimentum a quam vel dapibus. Fusce semper ante at dapibus rhoncus. Morbi id mollis lorem, a dapibus nisl. Aenean sodales semper ligula, ac sodales tellus tempor id. Donec eget dignissim lectus, et dictum leo. Quisque id sollicitudin neque. Nunc fringilla dapibus porttitor.', upvotes: 54, confirms: 23},
  {title: 'Post #9', body: 'Maecenas vulputate augue vitae mauris ornare, rutrum placerat velit efficitur. Donec sit amet neque ex. Suspendisse pulvinar ornare urna vitae fringilla. Cras iaculis metus a enim ullamcorper, in venenatis neque sollicitudin. Nunc condimentum a quam vel dapibus. Fusce semper ante at dapibus rhoncus. Morbi id mollis lorem, a dapibus nisl. Aenean sodales semper ligula, ac sodales tellus tempor id. Donec eget dignissim lectus, et dictum leo. Quisque id sollicitudin neque. Nunc fringilla dapibus porttitor.', upvotes: 21, confirms: 10},
  {title: 'Post #10', body: 'Maecenas vulputate augue vitae mauris ornare, rutrum placerat velit efficitur. Donec sit amet neque ex. Suspendisse pulvinar ornare urna vitae fringilla. Cras iaculis metus a enim ullamcorper, in venenatis neque sollicitudin. Nunc condimentum a quam vel dapibus. Fusce semper ante at dapibus rhoncus. Morbi id mollis lorem, a dapibus nisl. Aenean sodales semper ligula, ac sodales tellus tempor id. Donec eget dignissim lectus, et dictum leo. Quisque id sollicitudin neque. Nunc fringilla dapibus porttitor.', upvotes: 2, confirms: 2},
  {title: 'Post #11', body: 'Maecenas vulputate augue vitae mauris ornare, rutrum placerat velit efficitur. Donec sit amet neque ex. Suspendisse pulvinar ornare urna vitae fringilla. Cras iaculis metus a enim ullamcorper, in venenatis neque sollicitudin. Nunc condimentum a quam vel dapibus. Fusce semper ante at dapibus rhoncus. Morbi id mollis lorem, a dapibus nisl. Aenean sodales semper ligula, ac sodales tellus tempor id. Donec eget dignissim lectus, et dictum leo. Quisque id sollicitudin neque. Nunc fringilla dapibus porttitor.', upvotes: 8, confirms: 5},
];

// component
export default class Stories extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(fakeStories)
    };
  }

  renderStory(story) {
    return(
      <View style={styles.storyContainer}>
        <Text style={styles.title}>Title: {story.title}</Text>
        <Text style={styles.body}>Body: {story.body}</Text>
        <View>
          <Text style={styles.upvotes}>Upvotes: {story.upvotes}</Text>
          <Text style={styles.confirms}>Confirms: {story.confirms}</Text>
        </View>
      </View>
    );
  }
  render() {
    return(
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(story) => this.renderStory(story)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  storyContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#F2F2F2'
  },
  title: {

  },
  body: {

  },
  upvotes: {

  },
  confirms: {

  }
})
