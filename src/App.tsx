import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNav } from './presentation/routes/SideMenuNav';
import { BottomTabsNav } from './presentation/routes/BottomTabsNav';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNav />
      {/* <BottomTabsNav /> */}
    </NavigationContainer>
  )
}

export default App;
