import { View, Text } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import PrimaryButton from '../../components/shared/PrimaryButton';




const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top
    }}>
      <Text style={{marginBottom:10}}>ProfileScreen</Text>
      <PrimaryButton 
        onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)}
        label='Open menu'
      />
    </View>
  )
}

export default ProfileScreen;
