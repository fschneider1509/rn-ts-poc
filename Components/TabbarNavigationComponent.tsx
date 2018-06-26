import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SettingsComponent } from './SettingsComponent';
import { CustomerSearchComponent } from './CustomerSearchComponent';

export const TabbarNavigationComponent = createBottomTabNavigator (
    {
        Customer: { screen: CustomerSearchComponent },
        Settings: { screen: SettingsComponent }
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch(routeName) {
                    case 'Customer':
                        iconName = `ios-people${focused ? '' : '-outline'}`;
                        break;
                    case 'Settings':
                        iconName = `ios-cog${focused ? '' : '-outline'}`;
                        break;
                    default:
                        iconName = '';
                        break;
                }
                return <Ionicons name={iconName} size={35} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: '#007aff',
            inactiveTintColor: 'gray'
        },
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: true
    }
);
