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
                        titleStyle={{ color: 'azure', fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}
                        subtitle={item.description}
                        subtitleStyle={{ color: 'azure', fontSize: 16, marginLeft: 10 }}
                        onPress={() => navigate('MenuInfo', { menuId: item.id })}
                        leftIcon={{
                            name: 'list',
                            type: 'font-awesome',
                            color: 'midnightblue',
                            size: 30
                        }}
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