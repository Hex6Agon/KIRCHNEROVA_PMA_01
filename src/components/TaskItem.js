import {Text, StyleSheet, Pressable } from "react-native";
export default function TaskItem({itemTask, handleTaskDone}) {
    console.log(itemTask.done)
    return (
        <Pressable onPress={handleTaskDone}>
            <Text 
            style={itemTask.done ? styles.taskContainer : styles.taskContainerTrue}
            >
            {itemTask.title}
            </Text>;
        </Pressable>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#708d2b',
        padding: 20,
        margin: 4,
        borderRadius: 8,   
    },
    taskContainerTrue: {
        backgroundColor: '#c9ff4c',
        padding: 20,
        margin: 4,
        borderRadius: 8,   
    },
})