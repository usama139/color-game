import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {openDatabase, enablePromise} from 'react-native-sqlite-storage';
enablePromise(true)

export const connectToDatabase = async () => {
  try {
    const db = await openDatabase({ name: "UserDatabase.db", location: "default" });
    if (db) {
      Alert.alert("Success", "Connected to database successfully");
      return db;
    } else {
      throw new Error("Database connection returned null");
    }
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Could not connect to database");
    throw Error("Could not connect to database");
  }
};
export const createTables = async (db) => {
  const UserQuery = `
  CREATE TABLE IF NOT EXISTS User (
  id INTEGER DEFAULT 1, name TEXT, PRIMARY KEY(id)
  )
  `
  try{
    await db.executeSql(UserQuery)
  }
  catch(error){
    console.log(error)
    throw Error(`Failed to create tables`)
  }
 
}
export const getTableNames = async (db) => {
  try {
    const tableNames = [];
    const results = await db.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'"
    );
    results.forEach((result) => {
      for (let index = 0; index < result.rows.length; index++) {
        tableNames.push(result.rows.item(index).name);
      }
    });
    return tableNames;
  } catch (error) {
    console.error(error);
    throw Error("Failed to get table names from database");
  }
};

export const removeTable = async (db, tableName) => {
  const query = `DROP TABLE IF EXISTS ${tableName}`;
  try {
    await db.executeSql(query);
  } catch (error) {
    console.error(error);
    throw Error(`Failed to drop table ${tableName}`);
  }
};
export const addContact = async (db, contact) => {
  const insertQuery = `
    INSERT INTO Contacts ( name)
    VALUES (?, ?, ?)
  `;
  const values = [
   
    contact.name,
   
  ];
 
  
  try {
    await db.executeSql(insertQuery, values);
    console.log('Contact added successfully');
  } catch (error) {
    console.error('Failed to add contact', error);
    throw Error('Failed to add contact');
  }
};


const EnterNameScreen = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.replace('HomeScreen', { userName: name });
  };

 
  

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')} // Ensure you have a background image in your assets
    >
      <View style={styles.container}>
        <Text style={styles.title}>Enter Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EnterNameScreen;
