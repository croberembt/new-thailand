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
        title: 'Menu'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderMenuItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('MenuInfo', { menuId: item.id })}
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