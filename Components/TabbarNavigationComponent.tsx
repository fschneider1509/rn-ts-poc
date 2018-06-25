import { TabBarBottom, TabNavigator, createTabNavigator, createBottomTabNavigator } from 'react-navigation';
import { Settings } from './Settings';
import { CustomerOverview } from './CustomerOverview';

export const TabbarNavigationComponent = createBottomTabNavigator (
    {
        Customer: { screen: CustomerOverview },
        Settings: { screen: Settings }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: true
    }
);
