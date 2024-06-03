import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import ProductScreen from '../screens/products/ProductScreen';
import SettingScreen from '../screens/settings/SettingScreen';



export type RootStackParams = {
  Home: undefined;
  Product: {id: number, name: string};
  Products: undefined;
  Settings: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator 
     screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0
      }
     }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}
