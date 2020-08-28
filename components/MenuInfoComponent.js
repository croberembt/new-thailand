import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { MENU } from '../shared/menu';

function RenderMenuInfo({menuItem}) {
   
    if (menuItem) {
        return (
            <Card featuredTitle={menuItem.name}>
                <Text style={{margin: 10}}>
                    {menuItem.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class MenuInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            menu: MENU
        };
    }

    static navigationOptions = {
        title: 'Dish Information'
    };

    render() {
        const menuId = this.props.navigation.getParam('menuId');
        const menuItem = this.state.menu.filter(menuItem => menuItem.id === menuId)[0];
        return <RenderMenuInfo menuItem={menuItem} />;
    }
}

export default MenuInfo;