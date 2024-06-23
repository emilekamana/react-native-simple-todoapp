import { View, Text } from "react-native";
import React, { useState } from "react";
import FormField from "@/components/FormField";
import Button from "@/components/Button";

const NewTask = () => {
  const [form, setForm] = useState({
    title: "",
  });

  return (
    <View className="p-4">
      <FormField
        value={form.title}
        placeholder={"Enter the name of the task"}
        handleChangeText={(e) => setForm({ ...form, title: e })}
      />

      <Button
        containerStyles="mt-4"
        title={"Add task"}
        handlePress={() => {}}
      />
    </View>
  );
};

export default NewTask;
