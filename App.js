import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Pocitadlo Objednavok</Text>
      <Text>{count}</Text>

      <Button
        title="+"
        onPress={() => setCount(count + 1)}
      />

      <Button
        title="-"
        onPress={() => setCount(count - 1)}
      />

      <Button
        title="Reset"
        onPress={() => setCount(0)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff80a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});