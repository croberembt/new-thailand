import React, { Component } from 'react';
import { ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Home extends Component {

    static navigationOptions = {
        title: 'HOME'
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 25, color: 'azure', fontWeight: 'bold' }}>WELCOME TO NEW THAILAND!</Text>
                    <Card
                        title='Business Hours'
                        titleStyle={{ color: 'azure', fontSize: 24 }}
                        containerStyle={{ backgroundColor: 'mediumspringgreen' }}
                        >
                        <Text style={styles.text}>
                            Monday-Friday: 11am-10pm
                        </Text>
                        <Text style={styles.text}>
                            Saturday: 10am-11pm
                        </Text>
                        <Text style={styles.text}>
                            Sunday: closed
                        </Text>
                    </Card>
                    <Card
                        title='Location'
                        titleStyle={{ color: 'azure', fontSize: 24 }}
                        containerStyle={{ backgroundColor: 'mediumspringgreen' }}
                    >
                        <Text style={styles.text}>
                            1313 Blueberry Lane
                        </Text>
                        <Text style={styles.text}>
                            Saint Paul,
                        </Text>
                        <Text style={styles.text}>
                            MN 55104
                        </Text>
                    </Card>
                    <Card
                        title='Phone Number'
                        titleStyle={{ color: 'azure', fontSize: 24 }}
                        containerStyle={{ backgroundColor: 'mediumspringgreen' }}
                    >
                        <Text style={styles.text}>
                            (612) 313-1313
                        </Text>
                    </Card>
                </ScrollView>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mediumspringgreen',
    },
    scrollView: {
        backgroundColor: 'mediumspringgreen'
    },
    text: {
        fontSize: 20,
        color: 'azure',
        textAlign: 'center'
    },
  });
  

export default Home;