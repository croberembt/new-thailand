import React, { Component } from 'react';
import { ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: 'HOME'
    }

    render() {
        return(
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    HOME
                </Text>
            </ScrollView>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'mediumspringgreen',
      alignItems: 'center'
    },
    scrollView: {
      backgroundColor: 'mediumspringgreen'
    },
    text: {
      fontSize: 42,
      color: 'azure'
    },
  });
  

export default Home;