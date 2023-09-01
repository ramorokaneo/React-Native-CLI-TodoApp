import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAddTod = () => {
    onAdd(Text);
    setText('');
  };

  return ( 
    <View>
      <TextInput
        placeholder="Add a new todo..."
        value={text}
        onChangeText={(text) => setText(text)}
          />
          <Button title="Add" onPress={handleAddTodo} />
          </View>
  );
};

export default AddTodo;
