import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import Input from './Input';

const MainScreen = props => {
    const [todoList, setTodoList] = useState([]);

    const AddNewTask = (task) => {
        if(!task) return;
        setTodoList(prevState => [...prevState, task]);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View>
                    <Input 
                        onSubmit={AddNewTask}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList 
                        keyExtractor={(e, i) => i.toString()}
                        data={todoList}
                        renderItem={(e) => (
                            <Text>{e.item}</Text>
                        )} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });

export default MainScreen;