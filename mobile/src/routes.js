import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    }, {
        defaultNavigationOptions: {
            headerTitle: <Image source={logo} style={{marginHorizontal: 20}} />,
            headerBackTitle: null,
            headerTintColor: '#000',
        },
        mode: 'modal'
    })
);