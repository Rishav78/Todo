import React, { createContext, useState, useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage';

export const DatabseContext = createContext();

const DatabaseContextProvider = props => {
    const [tasks, setTasks] = useState([]);
    const db = SQLite.openDatabase({ name: 'test.db', createFromLocation: '~sqlitedatabase.db'});

    useEffect(() => {
        db.transaction( tx => {
            tx.executeSql('SELECT * FROM TASKS',[], (tx, result) => {
                const data = [];
                for(let i=0;i<result.rows.length;i++) {
                    data.push(result.rows.item(i).TASK);
                }
                setTasks(data);
            });
        });
    }, []);

    const insert = task => {
        db.transaction( tx => {
            tx.executeSql(`INSERT INTO TASKS VALUES("${task}")`, [], (tx, result) => {
                setTasks(prevState => [...prevState, task]);
            });
        });
    }

    return (
        <DatabseContext.Provider value={{ insert, tasks }}>
            { props.children }
        </DatabseContext.Provider>
    );
}

export default DatabaseContextProvider;