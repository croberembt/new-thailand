import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { MENU } from '../shared/menu';


function RenderMenuInfo({menuItem}) {
   
    if (menuItem) {
        return (
            <ScrollView style={{ backgroundColor: 'mediumspringgreen' }}>
                <Card 
                    title={menuItem.name}
                    titleStyle={{ color: 'azure', fontSize: 24 }}
                    containerStyle={{ backgroundColor: 'mediumspringgreen' }}
                >
                    <Text style={{ color: 'azure', fontSize: 20, textAlign: 'center' }}>
                        {menuItem.description}
                    </Text>
                </Card>
            </ScrollView>
        );
    }
    return <ScrollView />;
}

class MenuInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            menu: MENU
        };
    }

    static navigationOptions = {
        title: 'DETAILS'
    };

    render() {
        const menuId = this.props.navigation.getParam('menuId');
        const menuItem = this.state.menu.filter(menuItem => menuItem.id === menuId)[0];
        return <RenderMenuInfo menuItem={menuItem} />;
    }
}

export default MenuInfo;