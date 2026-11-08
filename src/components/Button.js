export default function ItemTask({ title, onPress }) {
  return (
    <Pressable
        onPress={onPress}
    >
      <Text style={styles.taskText}>{itemTask.title}</Text>
    </Pressable>
  );
}