import { View, Text } from 'react-native';
import React from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';

import { globalStyles } from '../../themes/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';




const SettingScreen = () => {

  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>SettingScreen</Text>
      <PrimaryButton 
        label='Back'
        onPress={()=> navigator.goBack()}
      />

      <PrimaryButton 
        label='Back home'
        onPress={()=> navigator.dispatch(StackActions.popToTop())}
      />
    </View>
  )
}

export default SettingScreen;
