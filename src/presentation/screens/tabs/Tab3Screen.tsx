import { View, Text } from 'react-native';

import HamburgerMenu from '../../components/shared/HamburgerMenu';
import { StackNavigator } from '../../routes/StackNavigator';


const Tab3Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab3Screen</Text>
    </View>
  )
}

export default Tab3Screen;
