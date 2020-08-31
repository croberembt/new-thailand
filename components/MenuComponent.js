import React, { Component } from 'react';
import { FlatList, View  } from 'react-native';
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
                <View backgroundColor='mediumspringgreen'>
                    <ListItem
                        topDivider
                        bottomDivider
                        containerStyle={{ backgroundColor: 'mediumspringgreen' }}
                        title={item.name}
                        titleStyle={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}
                        subtitle={item.description}
                        subtitleStyle={{ color: 'white', fontSize: 16}}
                        onPress={() => navigate('MenuInfo', { menuId: item.id })}
                        leftAvatar={{ source: require('./images/menu-icon.png')}}
                        leftAvatarStyle={{ backgroundColor: 'mediumspringgreen' }}
                    />
                </View>
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