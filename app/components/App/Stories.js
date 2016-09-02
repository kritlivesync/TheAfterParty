// dependencies
import React, { Component } from 'react';
import {
    View,
    Text,
    ListView
} from 'react-native';
import { connect } from 'react-redux';
// imports
// import StoryList from './StoryList';

// component
class Stories extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.stories)
    };
  }
  render() {
    const { stories } = this.props;
    if (stories) {
      return(
        <View style={{paddingTop: 22, flex: 1}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.author}: {rowData.body}</Text>}
          />
      </View>
      );
    } else {
      <View style={{ marginTop: 40 }}>
          <Text>Stories loading...</Text>
      </View>
    }
  }
}

const mapStateToProps = (state) => ({
  stories: state.stories.stories
});

export default connect(mapStateToProps, null)(Stories);
