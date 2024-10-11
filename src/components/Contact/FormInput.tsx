"use client";
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputProps,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";

type InputPropType = InputProps & TextareaProps;
interface Props extends InputPropType {
  name: string;
}
const FormInput = ({ placeholder, name, type, ...props }: Props) => {
  const inputProps = {
    id: name,
    placeholder: placeholder,
    variant: "flushed",
    size: "lg",
    w: "full",
    borderColor: "#666",
    autoComplete: "off",
    focusBorderColor: "#000",
    fontSize: 15,
    px: 2,
    _focus: { borderColor: "#000" },
    ...props,
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl isInvalid={errors[name] ? true : false}>
      {type === "textarea" ? (
        <Textarea {...inputProps} {...register(name)} minH="150px" />
      ) : (
        <Input {...inputProps} {...register(name)} />
      )}
      {errors[name] && (
        <FormErrorMessage>{errors[name]?.message?.toString()}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormInput;
