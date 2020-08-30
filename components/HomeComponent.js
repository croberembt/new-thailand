import React, { Component } from 'react';
import { ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: 'HOME'
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>
                        WELCOME TO NEW THAILAND!
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
      color: 'mintcream'
    },
  });
  

export default Home;