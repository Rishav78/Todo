import React, { useState } from 'react';
import {View} from 'react-native'
import {
    Appbar,
    Menu,
    Provider
} from 'react-native-paper';

const ScreenHeader = props => {
    const [menuVisibility, setMenuVisibility] = useState(false);
    return (
        <Appbar.Header>
            <Appbar.BackAction
            />
            <Appbar.Content
            title="Title"
            subtitle="Subtitle"
            />
            <Appbar.Action icon="magnify" />
            <Menu
                visible={menuVisibility}
                onDismiss={() => setMenuVisibility(false)}
                anchor={
                    <Appbar.Action icon="dots-vertical" onPress={() => setMenuVisibility(true)} />
                }
            >
                <Menu.Item onPress={() => {}} title="Item 1" />
                <Menu.Item onPress={() => {}} title="Item 2" />
                <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
        </Appbar.Header>
    );
}

export default ScreenHeader;