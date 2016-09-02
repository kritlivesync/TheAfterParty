// dependencies
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
// imports
import StoryList from './StoryList';

// component
class Stories extends Component {
    render() {
        const { stories } = this.props;
        if (stories) {
            console.log(stories); 
            return(
                <View>
                    <Text>Some loading text</Text> 
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
