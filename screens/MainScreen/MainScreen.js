import React, { useState, useContext } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import Input from './Input';
import ActionButton from '../../src/components/FloatingActionButton';
import Task from './Task';
import { ThemeContext } from '../../src/contexts/ThemeContext';

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
            <View style={ theme === 'dark' ? {...stylesCommon.container, ...stylesDarkTheme.container} : stylesCommon.container }>
                <View>
                    <Input 
                        onSubmit={AddNewTask}
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
                <ActionButton
                    onClick={() => setModelActive(true)}
                />
            </View>
        </SafeAreaView>
    );
};

const stylesCommon = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    }
});

const stylesDarkTheme = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a'
    }
})

export default MainScreen;