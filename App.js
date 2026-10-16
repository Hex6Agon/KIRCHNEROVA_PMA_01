
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[text, setText] = useState('');
  const [taskList , setTaskList] = useState([]);
  function inputHandler(text) {
    setText(text);
    console.log(text);
  }
  
  function addHandler() {
    setTaskList([...taskList, text]);
    setText("");
  }
  return ( 
      <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Text>TaskApp</Text>
        <TextInput onChangeText={inputHandler} style={styles.inputText} placeholder="Zadaj ulohu" />
        <Button onPress={addHandler} title="ADD"></Button>
      </View>
      <View style={styles.taskContainer}>
        <Text>UDALOSTI ::::::</Text>
        {taskList.map((i) => (
          <Text style={styles.taskText} key={i}>
          {i}/>
      </Text>;
        ))}

    </View>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#ffbce2",
  },
  inputContainer: {
    borderWidth: 10,
    borderRadius: 8,
    borderColor: "#b00b69",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  inputText: {},
  taskContainer: {
    backgroundColor: "#91bff8"
  },
  inputContainer: {
    backgroundColor: "#dbbeff",
    flex: 0.5,
  },
  taskText: {
    backgroundColor: "#dc003000",
  }

});
