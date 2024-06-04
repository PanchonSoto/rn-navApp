import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import { globalColors } from '../themes/theme';



const Tab = createBottomTabNavigator();


export const BottomTabsNav = () => {
  return (
    <Tab.Navigator
     sceneContainerStyle={{
        backgroundColor: globalColors.backgrond,
     }}
     screenOptions={{
        tabBarLabelStyle: {
            marginBottom: 5,
        },
        headerStyle: {
            elevation: 0,
            shadowColor: 'transparent'
        },
        tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0
        }
     }}
    >
      <Tab.Screen name="Tab1" options={{title:'Tab1', tabBarIcon: ({color})=>(<Text style={{color}}>Tab1</Text>)}} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{title:'Tab2', tabBarIcon: ({color})=>(<Text style={{color}}>Tab2</Text>)}} component={Tab2Screen} />
      <Tab.Screen name="Tab3" options={{title:'Tab3', tabBarIcon: ({color})=>(<Text style={{color}}>Tab3</Text>)}} component={Tab3Screen} />
    </Tab.Navigator>
  )
}
