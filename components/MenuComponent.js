import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { MENU } from '../shared/menu';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: MENU
        }
    }

    static navigationOptions = {
        title: 'MENU'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderMenuItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('MenuInfo', { menuId: item.id })}
                    leftAvatar={{ source: require('./images/menu-icon.png')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.menu}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Menu;