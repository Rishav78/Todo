import React, { useState, useContext } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    StyleSheet,
    Modal
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
        <Modal 
            visible={props.visible} 
            transparent={true}
            animationType="slide">
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
                    style={ theme === 'dark' ? {...stylesCommon.submitButton, ...stylesDarkTheme.submitButton} : stylesCommon.submitButton}>
                    <Text 
                        style={ theme === 'dark' ? {...stylesCommon.submitButtonTitle, ...stylesDarkTheme.submitButtonTitle} : stylesCommon.submitButtonTitle}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const stylesCommon = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    inputText: {
        borderBottomWidth: 1,
        padding: 0,
        fontSize: 18,
        marginHorizontal: 5
    },
    submitButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0052cc',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        overflow: 'hidden',
        marginHorizontal: 5
    },
    submitButtonTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

const stylesDarkTheme = StyleSheet.create({
    inputText: {
        borderBottomColor: '#FFF',
        color: '#FFF'
    },
    submitButton: {
        backgroundColor: '#333'
    },
    submitButtonTitle: {
        color: '#FFF'
    }
});

export default Input;