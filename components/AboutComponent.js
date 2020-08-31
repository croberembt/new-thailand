import React, { Component } from 'react';
import { ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';


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
                    <Card
                        title='Our Story'
                        titleStyle={{ color: 'azure', fontSize: 24 }}
                        containerStyle={{ backgroundColor: 'mediumspringgreen' }}
                        >
                        <Text style={styles.text}>
                            New Thailand began as and will always be a local, family-owned business.
                            Established in 1980, our vision was to open an authentic Thai restaurant
                            with fresh, locally-sourced ingredients and a menu featuring the best of 
                            Thai cooking. 
                        </Text>
                    </Card>
                    <Card
                        title='Our Chef'
                        titleStyle={{ color: 'azure', fontSize: 24 }}
                        containerStyle={{ backgroundColor: 'mediumspringgreen' }}
                    >
                        <Text style={styles.text}>
                            Boonsri began cooking as a young girl in Thailand and came to the U.S. with her parents
                            in 1967. She comes from multiple generations of chefs and has perfected her craft
                            for the benefit of the St. Paul community. She was nominated for a James Beard award in 2017.
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
        backgroundColor: 'mediumspringgreen'
    }, 
    scrollView: {
        backgroundColor: 'mediumspringgreen',
    },
    text: {
        fontSize: 20,
        color: 'azure',
        textAlign: 'center'
    },
});

export default About;