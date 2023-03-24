import React from "react";
import { Control, Controller } from "react-hook-form";
import { Input, InputProps } from "../Input";

type Props = InputProps & {
  control: Control<any>;
  name: string;
};

export function ControlledInput({ control, label, name, ...rest }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input label={label} onChangeText={onChange} value={value} {...rest} />
      )}
    />
  );
}
