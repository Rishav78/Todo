import React, { useState, useContext } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';
import { ThemeContext } from '../../src/contexts/ThemeContext';

const Input = props => {
    const { theme } = useContext(ThemeContext);
    const [text, setText] = useState('');

    const Add = () => {
        props.onSubmit(text)
        setText('');
    }

    return (
        <View style={ theme === 'dark' ? {...stylesCommon.container, ...stylesDarkTheme.container} : stylesCommon.container}>
            <TextInput
                onChangeText={setText}
                style={ theme === 'dark' ? {...stylesCommon.inputText, ...stylesDarkTheme.inputText} : stylesCommon.inputText}
                value={text}
                placeholder="Type here..."
                placeholderTextColor={ theme === 'dark' ? "#FFF" : "#000"}
            />
            <TouchableOpacity
                onPress={Add}
                activeOpacity={0.8}
                style={stylesCommon.submitButton}>
                <Text 
                    style={stylesCommon.submitButtonTitle}>
                    Send
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const stylesCommon = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    inputText: {
        flex: 1,
        borderBottomWidth: 1,
        padding: 0,
        fontSize: 18,
        marginHorizontal: 5
    },
    submitButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        overflow: 'hidden',
        marginHorizontal: 5
    },
    submitButtonTitle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

const stylesDarkTheme = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a'
    },
    inputText: {
        borderBottomColor: '#FFF',
        color: '#FFF'
    }
})

export default Input;