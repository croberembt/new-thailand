import React, { Component } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';

class Order extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'ORDER'
    };

    render() {
        const { navigate } = this.props.navigation;
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Card 
                        containerStyle={{ backgroundColor: 'mediumspringgreen' }}
                    >
                        <Button
                            type='outline'
                            title='Pick Up'
                            titleStyle={{ color: 'mediumspringgreen', fontSize: 16 }}
                            buttonStyle={{ marginTop: 50, backgroundColor: 'midnightblue' }}
                            onPress={() => Alert.alert('Please call as us at (612) 313-1313 to order for pick up.')}
                        />
                    </Card>
                    <Card 
                        containerStyle={{ backgroundColor: 'mediumspringgreen' }}
                    >
                        <Button
                            type='outline'
                            title='Delivery'
                            titleStyle={{ color: 'mediumspringgreen', fontSize: 16 }}
                            buttonStyle={{ marginTop: 50, backgroundColor: 'midnightblue' }}
                            onPress={() => Alert.alert('Please go to http://bitesquad.com to order delivery.')}
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