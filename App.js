
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder = "Zadaj ulohu"/>
        <Button title="ADD"></Button>
      </View>
      <View style = {styles.taskContainer}>
        <Text>UDALOSTI ::::::</Text>
      </View>
      <Text>TaskApp</Text>
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

});
