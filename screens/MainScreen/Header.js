import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native'
import {
    Appbar,
    Menu
} from 'react-native-paper';
import { ThemeContext } from '../../src/contexts/ThemeContext';

const ScreenHeader = props => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [menuVisibility, setMenuVisibility] = useState(false);

    const changeTheme = (theme) => {
        setTheme(theme);
        setMenuVisibility(false);
    }

    return (
        <Appbar.Header
            style={ theme === 'dark' ? {...stylesCommon.header, ...stylesDarkTheme.header} : stylesCommon.header}
        >

            <Appbar.Content
                title="Todo"/>
            <Menu
                visible={menuVisibility}
                onDismiss={() => setMenuVisibility(false)}
                anchor={
                    <Appbar.Action 
                        color="#FFF"
                        icon="dots-vertical" onPress={() => setMenuVisibility(true)} />
                }>
                { theme === 'dark' ?
                 <Menu.Item 
                    style={theme === 'dark' ? stylesDarkTheme.items : {}} 
                    onPress={() => changeTheme('light')} 
                    title={<Text style={ theme === 'dark' ?{ color: 'white'} : {}}>Light Theme</Text>}/>
                :
                 <Menu.Item  
                    style={theme === 'dark' ? stylesDarkTheme.items : {}}
                    onPress={() => changeTheme('dark')} 
                    title={<Text style={ theme === 'dark' ?{ color: 'white'} : {}}>Dark Theme</Text>} />}
            </Menu>
        </Appbar.Header>
    );
}

const stylesCommon = StyleSheet.create({
    header: {
        color: 'white'
    }
});


const stylesDarkTheme = StyleSheet.create({
    header: {
        backgroundColor: '#262626'
    },
    menu: {
        backgroundColor: '#262626',
        padding: 0,
        margin: 0
    },
    items: {
        backgroundColor: '#262626',
        color: '#FFF'
    }
})

export default ScreenHeader;