import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import MenuInfo from './MenuInfoComponent';
import About from './AboutComponent';
import Order from './OrderComponent';
import Gallery from './GalleryComponent';
import { View, Platform, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator(
    {
        Menu: { 
            screen: Menu,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list-alt'
                    type='font-awesome'
                    iconStyle={styles.pageIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        MenuInfo: { 
            screen: MenuInfo,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='arrow-circle-o-left'
                    type='font-awesome'
                    iconStyle={styles.pageIcon}
                    onPress={() => navigation.pop()}
                />
            })
        },
    }, 
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'mediumspringgreen'
            },
            headerTintColor: 'mediumspringgreen',
            headerTitleStyle: {
                color: 'midnightblue',
                marginLeft: 30,
                marginBottom: 15
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'mediumspringgreen'
            },
            headerTintColor: 'mediumspringgreen',
            headerTitleStyle: {
                color: 'midnightblue',
                marginLeft: 30,
                marginBottom: 15
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.pageIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'mediumspringgreen'
            },
            headerTintColor: 'mediumspringgreen',
            headerTitleStyle: {
                color: 'midnightblue',
                marginLeft: 30,
                marginBottom: 15
            },
            headerLeft: <Icon
                name='list'
                type='font-awesome'
                iconStyle={styles.pageIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const GalleryNavigator = createStackNavigator(
    {
        Gallery: { screen: Gallery }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'mediumspringgreen'
            },
            headerTintColor: 'mediumspringgreen',
            headerTitleStyle: {
                color: 'midnightblue',
                marginLeft: 30,
                marginBottom: 15
            },
            headerLeft: <Icon
                name='photo'
                type='font-awesome'
                iconStyle={styles.pageIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const OrderNavigator = createStackNavigator(
    {
        Order: { screen: Order }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'mediumspringgreen',
            },
            headerTintColor: 'mediumspringgreen',
            headerTitleStyle: {
                color: 'midnightblue',
                marginLeft: 30,
                marginBottom: 15
            },
            headerLeft: <Icon
                name='shopping-bag'
                type='font-awesome'
                iconStyle={styles.pageIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        About: { screen: AboutNavigator },
        Gallery: { screen: GalleryNavigator },
        Menu: { screen: MenuNavigator },
        Order: { screen: OrderNavigator }
    },
    {
        drawerBackgroundColor: 'mediumspringgreen',
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageIcon: {
        marginLeft: 10,
        marginBottom: 15,
        color: 'midnightblue',
        fontSize: 35
    }
});


export default Main;