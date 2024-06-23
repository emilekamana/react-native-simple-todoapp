import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

interface FormFieldProps {
  value: string;
  placeholder: string;
  handleChangeText(e: string): void;
  otherStyles?: string;
}

const FormField = ({
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      className={`space-y-2 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center ${otherStyles}`}
    >
      <TextInput
        className="flex-1  font-psemibold text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7B7B8B"
        onChangeText={handleChangeText}
        {...props}
      />
    </View>
  );
};

export default FormField;
