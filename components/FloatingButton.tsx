import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";

interface FloatingButtonProps {
  handlePress(): any;
  containerStyles?: string;
  iconStyles?: string;
}

const FloatingButton = ({
  handlePress,
  containerStyles,
  iconStyles,
}: FloatingButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${containerStyles} bg-secondary rounded-full p-4 items-center justify-center`}
    >
      <Image
        source={icons.addWhite}
        resizeMode="contain"
        className={`${iconStyles}`}
      />
    </TouchableOpacity>
  );
};

export default FloatingButton;
