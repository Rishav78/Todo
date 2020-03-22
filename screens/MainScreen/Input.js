import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';

const Input = props => {
    const [text, setText] = useState('');

    const Add = () => {
        props.onSubmit(text)
        setText('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setText}
                style={styles.inputText}
                value={text}
                placeholder="Type here..."
            />
            <TouchableOpacity
                onPress={Add}
                activeOpacity={0.8}
                style={styles.submitButton}>
                <Text 
                    style={styles.submitButtonTitle}>
                    Send
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default Input;