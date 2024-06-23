import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TouchableHighlight,
  Image,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";

interface ListTileProps {
  title: string;
  handlePress(): any;
  handleCheckPress(): any;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  isCompleted: boolean;
}

const ListTile = ({
  title,
  isCompleted,
  handlePress,
  handleCheckPress,
  containerStyles,
  textStyles,
  isLoading,
}: ListTileProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`w-full p-4 flex-row justify-between bg-white shadow-md rounded-md ${containerStyles}`}
    >
      <Text className={`text-md ${textStyles}`}>{title}</Text>

      <TouchableHighlight onPress={handleCheckPress}>
        <Image
          source={isCompleted ? icons.checkFilled : icons.check}
          resizeMode="contain"
          className="h-6 w-6"
        />
      </TouchableHighlight>
    </TouchableOpacity>
  );
};

export default ListTile;
