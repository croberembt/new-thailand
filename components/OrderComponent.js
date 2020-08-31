import React, { Component } from 'react';
import { ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';

class Order extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'ORDER'
    };

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>
                        PICK UP
                    </Text>
                    <Text style={styles.text}>
                        DELIVERY
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

export default Order;