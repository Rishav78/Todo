import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';

const Input = props => {
    const [text, setText] = useState('');

    const Add = () => {
        setText('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setText}
                style={styles.inputMessage}
                placeholder="Type here..."
            />
            <TouchableOpacity
                onPress={Add}
                activeOpacity={0.8}
                style={styles.sendButton}>
                <Text 
                    style={styles.sendButtonTitle}>
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
    }
});

export default Input;