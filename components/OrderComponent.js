import React, { Component } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

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
                    <Card 
                        containerStyle={{ backgroundColor: 'mediumspringgreen' }}
                    >
                        <Button
                            type='outline'
                            title='Pick Up'
                            titleStyle={{ color: 'midnightblue', fontSize: 16 }}
                            buttonStyle={{ marginTop: 50, backgroundColor: 'azure' }}
                        />
                    </Card>
                    <Card 
                        containerStyle={{ backgroundColor: 'mediumspringgreen' }}
                    >
                        <Button
                            type='outline'
                            title='Delivery'
                            titleStyle={{ color: 'midnightblue', fontSize: 16 }}
                            buttonStyle={{ marginTop: 50, backgroundColor: 'azure' }}
                        />
                    </Card>
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