import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const ActionButton = props => {
    return (
        <TouchableOpacity
            onPress={() => props.onClick()}
            activeOpacity={0.7}
            style={{...styles.container}}>
            <View style={styles.content}>
                <Text 
                    style={{ ...styles.title }}>
                    +
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        bottom: 0,
        right: 0,
        backgroundColor: '#333',
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
})

export default ActionButton;