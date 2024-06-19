import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ListTile from "@/components/ListTile";
import FloatingButton from "@/components/FloatingButton";
import { router } from "expo-router";

const Home = () => {
  return (
    <>
      <SafeAreaView className="h-screen w-full px-4">
        <Text className="text-4xl text-secondary font-bold">Todo App</Text>

        <FlatList
          className="mt-4"
          data={[{ key: "something" }]}
          renderItem={(item) => (
            <ListTile
              title="task 1"
              handlePress={() => {}}
              isCompleted={false}
            />
          )}
        />

        <FloatingButton
          handlePress={() => router.push("/new-task")}
          containerStyles="absolute right-10 bottom-10"
        />
      </SafeAreaView>

      <StatusBar backgroundColor="#D3D0CB" style="dark" />
    </>
  );
};

export default Home;
