import React, { Component } from 'react';
import { ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';


class About extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'ABOUT US'
    };

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>
                        ABOUT US
                    </Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'mediumspringgreen'
    },
    scrollView: {
      backgroundColor: 'mediumspringgreen',
    },
    text: {
      fontSize: 42,
      color: 'azure',
      textAlign: 'center'
    },
  });

export default About;