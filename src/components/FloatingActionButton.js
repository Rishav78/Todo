import React, { useContext } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

const ActionButton = props => {
    const { theme } = useContext(ThemeContext);
    return (
        <TouchableOpacity
            onPress={() => props.onClick()}
            activeOpacity={0.7}
            style={ theme === 'dark' ? {...stylesCommon.container, ...stylesDarkTheme.container} : stylesCommon.container}>
            <View style={stylesCommon.content}>
                <Text 
                    style={{ ...stylesCommon.title }}>
                    +
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const stylesCommon = StyleSheet.create({
    container: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        bottom: 0,
        right: 0,
        backgroundColor: '#0047b3',
        margin: 10
    },
    content: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 20
    }
});

const stylesDarkTheme = StyleSheet.create({
    container: {
        backgroundColor: '#333'
    }
});

export default ActionButton;