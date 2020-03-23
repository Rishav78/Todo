import React, { createContext, useState, useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage';

export const DatabseContext = createContext();

const DatabaseContextProvider = props => {
    const [tasks, setTasks] = useState([]);
    const db = SQLite.openDatabase({ 
        name: 'test.db', 
        location: 'default',
        androidDatabaseProvider: 'system'
    });

    useEffect(() => {
        db.transaction(tx => {
            console.log('again in')
            // tx.executeSql('DROP TABLE TASKS')
            tx.executeSql('CREATE TABLE IF NOT EXISTS TASKS (task TEXT NOT NULL, completed INTEGER NOT NULL)', [], (tx, result) => {

            })
        })
    }, []);

    useEffect(() => {
        db.transaction( tx => {
            tx.executeSql('SELECT * FROM TASKS',[], (tx, result) => {
                const data = [];
                for(let i=0;i<result.rows.length;i++) {
                    data.push(result.rows.item(i));
                }
                setTasks(data);
            });
        });
    }, []);

    const Insert = task => {
        db.transaction( tx => {
            console.log('hiiiiii')
            tx.executeSql(`INSERT INTO TASKS VALUES("${task}", 0)`, [], (tx, result) => {
                console.log('here => ',result.rows.item())
                setTasks(prevState => [...prevState, { task }]);
            });
        });
    }

    const updateCompleted = index => {
        db.transaction( tx => {
            tx.executeSql(`UPDATE TABLE TASKS SET completed = 1 where task = "${tasks[index].task}"`, [], (tx, result) => {
                console.log('completed => ', result);
                const data = [...tasks];
                data[index].completed = 1;
                setTasks(data);
            })
        })
    }

    const Delete = index => {
        db.transaction( tx => {
            const task = tasks[index].task;
            tx.executeSql(`DELETE FROM TASKS WHERE task="${task}"`, [], (tx, result) => {
                console.log(result);
                setTasks(prevState => prevState.filter( (e, i) => i!==index));
            })
        })
    }

    return (
        <DatabseContext.Provider value={{ Insert, updateCompleted, tasks, Delete }}>
            { props.children }
        </DatabseContext.Provider>
    );
}

export default DatabaseContextProvider;