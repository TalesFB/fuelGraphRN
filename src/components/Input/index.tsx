import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Container, IconContainer, InputText, LabelInput } from "./styles";

export type InputProps = TextInputProps & {
  label: string;
  // icon: React.ComponentProps<typeof Feather>["name"];
  value?: string;
};

export function Input({ label,  value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      {/* <IconContainer isFocused={isFocused}>
        <Feather
          name={icon}
          size={24}
          color={(isFocused || isFilled) ? '#DC1637' : '#AEAEB3'}
        />
      </IconContainer> */}
      <LabelInput>{label}</LabelInput>
      <InputText
        placeholderTextColor={"#7E7E7E"}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={value}
        {...rest}
      />
    </Container>
  );
}
