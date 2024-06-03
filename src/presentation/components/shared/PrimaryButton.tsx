import { Text, Pressable } from 'react-native';
import React from 'react';
import { globalStyles } from '../../themes/theme';

interface Props {
    label: string;
    onPress: () => void;
}

const PrimaryButton = ({label, onPress}:Props) => {
  return (
    <Pressable
     onPress={()=>onPress()} 
     style={globalStyles.primaryBtn}>
        <Text style={globalStyles.buttonTxt}>{label}</Text>
    </Pressable>
  )
}

export default PrimaryButton;
