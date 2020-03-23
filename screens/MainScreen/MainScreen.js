import React, { useState, useContext } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet
} from 'react-native';

import { FAB, Provider } from 'react-native-paper';
import Input from './Input';
import Task from './Task';
import { ThemeContext } from '../../src/contexts/ThemeContext';
import Header from './Header';

const MainScreen = props => {
    const { theme } = useContext(ThemeContext);
    const [modelActive, setModelActive] = useState(false);
    const [todoList, setTodoList] = useState([]);

    const AddNewTask = (task) => {
        if(!task) return;
        setTodoList(prevState => [...prevState, task]);
        setModelActive(false);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Provider>
                <Header />
                <View style={ theme === 'dark' ? {...stylesCommon.container, ...stylesDarkTheme.container} : stylesCommon.container }>
                    <View>
                        <Input 
                            onSubmit={AddNewTask}
                            onCancel={() => setModelActive(false)}
                            visible={modelActive}

                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <FlatList 
                            keyExtractor={(e, i) => i.toString()}
                            data={todoList}
                            renderItem={(e) => (
                                <Task title={e.item} />
                            )} />
                    </View>
                    <FAB
                        icon="plus"
                        onPress={() => setModelActive(true)}
                        style={ theme === 'dark' ? {...stylesCommon.addTaskButton, ...stylesDarkTheme.addTaskButton} : stylesCommon.addTaskButton}
                    />
                </View>
            </Provider>
        </SafeAreaView>
    );
};

const stylesCommon = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    },
    addTaskButton: {
        backgroundColor: '#0047b3',
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 25
    }
});

const stylesDarkTheme = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a'
    },
    addTaskButton: {
        backgroundColor: '#333'
    }
})

export default MainScreen;