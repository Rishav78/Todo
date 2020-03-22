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

    const Cancel = () => {
        props.onCancel()
        setText('');
    }

    return (
        // pop up when press add button
        <Modal 
            visible={props.visible} 
            transparent={true}
            animationType="slide">
            {/* hide modal when click on screen */}
            <TouchableOpacity
                activeOpacity={1} 
                onPress={Cancel}
                style={ theme === 'dark' ? {...stylesCommon.container, ...stylesDarkTheme.container} : stylesCommon.container}>
                <TextInput
                    onChangeText={setText}
                    style={ theme === 'dark' ? {...stylesCommon.inputText, ...stylesDarkTheme.inputText} : stylesCommon.inputText}
                    value={text}
                    placeholder="Type here..."
                    placeholderTextColor={ theme === 'dark' ? "#FFF" : "#000"}
                />
                {/* button to add task */}
                <TouchableOpacity
                    onPress={Add}
                    activeOpacity={0.8}
                    style={ theme === 'dark' ? {...stylesCommon.submitButton, ...stylesDarkTheme.submitButton} : stylesCommon.submitButton}>
                    <Text style={stylesCommon.submitButtonTitle}>
                        Add
                    </Text>
                </TouchableOpacity>
                {/* button to cancel and hide modal */}
                <TouchableOpacity
                    onPress={Cancel}
                    activeOpacity={0.8}
                    style={{...stylesCommon.submitButton, ...stylesCommon.cancelButton}}>
                    <Text style={stylesCommon.submitButtonTitle}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
}

// light theme style
const stylesCommon = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    inputText: {
        borderBottomWidth: 1,
        padding: 0,
        fontSize: 18,
        marginHorizontal: 5
    },
    cancelButton: {
        backgroundColor: 'red',
    },
    submitButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0052cc',
        paddingVertical: 8,
        borderRadius: 5,
        overflow: 'hidden',
        marginHorizontal: 5,
        marginTop: 12
    },
    submitButtonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF'
    }
});

// dark theme style
const stylesDarkTheme = StyleSheet.create({
    inputText: {
        borderBottomColor: '#FFF',
        color: '#FFF'
    },
    submitButton: {
        backgroundColor: '#333'
    }
});

export default Input;