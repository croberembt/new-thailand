import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View>
                <Text>Welcome to New Thailand!</Text>
            </View>
        );
    }
}

export default Home;