import {
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ListTile from "@/components/ListTile";
import FloatingButton from "@/components/FloatingButton";
import { router } from "expo-router";
import FormField from "@/components/FormField";

const Home = () => {
  const [form, setForm] = useState({
    key: "",
    status: false,
  });

  const [tasks, setTasks] = useState<Array<{ key: string; status: boolean }>>(
    []
  );

  const handleAddTaskPress = () => {
    Keyboard.dismiss();

    setTasks([form, ...tasks]);
    setForm({ ...form, key: "" });
  };

  const handleTaskCompleted = (key: string) => {
    setTasks(
      tasks.map((task) =>
        task.key === key ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <>
      <SafeAreaView className="h-screen w-full px-4">
        <Text className="text-4xl text-secondary font-bold">Todo App</Text>

        {(tasks.length > 0 && (
          <FlatList
            className="mt-4"
            data={tasks}
            renderItem={(item) => (
              <ListTile
                handleCheckPress={() => handleTaskCompleted(item.item.key)}
                title={item.item.key}
                handlePress={() => {}}
                isCompleted={item.item.status}
                containerStyles="mt-4"
              />
            )}
          />
        )) || (
          <Text className="text-2xl text-secondary  mt-4">Add a new task</Text>
        )}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="absolute bottom-6 flex flex-row justify-around items-center w-full px-4"
        >
          <FormField
            value={form.key}
            placeholder={"Enter the name of the task"}
            handleChangeText={(e) => setForm({ ...form, key: e })}
            otherStyles="w-3/4"
          />
          <FloatingButton
            handlePress={handleAddTaskPress}
            containerStyles="w-1/4"
            iconStyles="w-6 h-6"
          />
        </KeyboardAvoidingView>
      </SafeAreaView>

      <StatusBar backgroundColor="#D3D0CB" style="dark" />
    </>
  );
};

export default Home;
