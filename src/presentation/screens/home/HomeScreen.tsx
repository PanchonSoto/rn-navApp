import { Pressable, Text, View } from 'react-native';
import { type NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native';

import PrimaryButton from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';

import { globalStyles } from '../../themes/theme';
import { useEffect } from 'react';
import HamburgerMenu from '../../components/shared/HamburgerMenu';

const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // useEffect(()=>{
  //   navigation.setOptions({
  //     headerLeft: ()=>(
  //       <Pressable onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)}>
  //         <Text>Menu</Text>
  //       </Pressable>  
  //     )
  //   })
  // },[]);

  return (
    <View style={globalStyles.container}>

      <HamburgerMenu />

      <PrimaryButton 
       label='Products' 
       onPress={()=>navigation.navigate('Products')}
      />

      <PrimaryButton 
       label='Settings' 
       onPress={()=>navigation.navigate('Settings')}
      />

    </View>
  )
}

export default HomeScreen;
