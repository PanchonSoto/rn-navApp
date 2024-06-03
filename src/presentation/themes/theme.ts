import { StyleSheet } from "react-native";


export const globalColors = {
    primary: '#7037eb',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',
    backgrond: '#fff'
}


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.backgrond
    },
    primaryBtn: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonTxt: {
        color: globalColors.backgrond,
        fontSize: 18,

    },
});