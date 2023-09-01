import React from 'react';
import { View, Text, FlatList } from 'react-native';

const TodoList = ({ todos }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item })} => (
        <View>
          <Text>{item.text}</Text>
  </View>
)}
/>
);
};

export default TodoList;
