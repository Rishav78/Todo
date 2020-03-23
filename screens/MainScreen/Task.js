import React, { useContext } from 'react';
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text
} from 'react-native';
import { ThemeContext } from '../../src/contexts/ThemeContext';


const Task = props => {
    const { theme } = useContext(ThemeContext);
    return (
        <TouchableOpacity 
            onLongPress={() => props.onLongPress()}
            style={{ flex: 1 }}
            onPress={() => props.onPress()}>
            <View 
                style={theme === 'dark' ? { ...stylesCommon.container, ...stylesDarkTheme.container } : stylesCommon.container}>
                <Text 
                    style={(theme === 'dark' ? { ...stylesCommon.title, ...stylesDarkTheme.title } : stylesCommon.title)}>
                    { props.title }
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const stylesCommon = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginVertical: 8
    },
    title: {

    }
});

const stylesDarkTheme = StyleSheet.create({
    container: {
        backgroundColor: '#333'
    },
    title: {
        color: '#FFF'
    }
});


export default Task;