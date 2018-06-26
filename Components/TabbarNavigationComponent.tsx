import { createBottomTabNavigator } from 'react-navigation';
import { Entypo } from 'react-native-vector-icons/Entypo'
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
                // const { routeName } = navigation.state;
                // if( routeName ==== 'Customer' ) {
                //     return <Entypo name={'cog'} size={25} color={}/>;
                // } else 
            };
        }),
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: true
    }
);
