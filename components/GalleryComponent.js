import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Gallery extends Component {

    static navigationOptions = {
        title: 'GALLERY'
    }

    render() {
        return(
            <ScrollView style={{ backgroundColor: 'mediumspringgreen' }}>
                <Card 
                    title='Inside Seating'
                    titleStyle={{ color: 'azure', fontSize: 24 }}
                    image={require('./images/inside.jpg')} 
                    containerStyle={{ backgroundColor: 'mediumspringgreen' }} 
                />
                <Card 
                    title='Patio Seating'
                    titleStyle={{ color: 'azure', fontSize: 24 }}
                    image={require('./images/patio.jpg')} 
                    containerStyle={{ backgroundColor: 'mediumspringgreen' }} 
                />
                <Card 
                    title='Ample Tap List'
                    titleStyle={{ color: 'azure', fontSize: 24 }}
                    image={require('./images/tap.jpg')} 
                    containerStyle={{ backgroundColor: 'mediumspringgreen' }} 
                />
                <Card 
                    title='Board Games!'
                    titleStyle={{ color: 'azure', fontSize: 24 }}
                    image={require('./images/board-games.jpg')} 
                    containerStyle={{ backgroundColor: 'mediumspringgreen' }} 
                />
                <Card 
                    title='Egg Rolls' 
                    titleStyle={{ color: 'azure', fontSize: 24 }}
                    image={require('./images/egg-roll.jpg')} 
                    containerStyle={{ backgroundColor: 'mediumspringgreen' }} 
                />
                <Card 
                    title='Fresh Spring Rolls'
                    titleStyle={{ color: 'azure', fontSize: 24 }}
                    image={require('./images/spring-roll.jpg')} 
                    containerStyle={{ backgroundColor: 'mediumspringgreen' }} 
                />
                <Card 
                    title='Chicken Satay'
                    titleStyle={{ color: 'azure', fontSize: 24 }}
                    image={require('./images/chicken-satay.jpg')} 
                    containerStyle={{ backgroundColor: 'mediumspringgreen' }} 
                />
                <Card 
                    title='Pad Thai'
                    titleStyle={{ color: 'azure', fontSize: 24 }}
                    image={require('./images/pad-thai.jpg')} 
                    containerStyle={{ backgroundColor: 'mediumspringgreen' }} 
                />
                <Card 
                    title='Thai Green Curry'
                    titleStyle={{ color: 'azure', fontSize: 24 }}
                    image={require('./images/green-curry.jpg')} 
                    containerStyle={{ backgroundColor: 'mediumspringgreen' }} 
                />
                <Card 
                    title='Cashew Chicken'
                    titleStyle={{ color: 'azure', fontSize: 24 }}
                    image={require('./images/cashew-chicken.jpg')} 
                    containerStyle={{ backgroundColor: 'mediumspringgreen' }} 
                />
            </ScrollView>
        );
    }
}
  
export default Gallery;