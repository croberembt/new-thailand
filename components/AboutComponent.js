import React, { Component } from 'react';
import { Text } from 'react-native';

class About extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'About Us'
    };

    render() {

        return (
            <Text>About Us</Text>
        );

    }
}

export default About;