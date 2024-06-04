import { Pressable } from 'react-native';
import { useEffect } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import IonIcon from './IonIcon';
import { globalColors } from '../../themes/theme';

const HamburgerMenu = () => {

    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
        headerLeft: ()=> (
            <Pressable 
             onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)}
             style={{marginLeft: 5}}
            >
                <IonIcon name='menu-outline' color={globalColors.primary}/>
            </Pressable>
        )
        });
    },[]);

    return (<></>)
}

export default HamburgerMenu;
