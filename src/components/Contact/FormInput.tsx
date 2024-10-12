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
import Motion from "../common/Motion";

type InputPropType = InputProps & TextareaProps;
interface Props extends InputPropType {
  name: string;
  delay: number;
}
const FormInput = ({ placeholder, name, type, delay, ...props }: Props) => {
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
    <Motion
      initial={{ opacity: 0, y: "50%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      style={{ width: "100%" }}
    >
      <FormControl isInvalid={errors[name] ? true : false}>
        {type === "textarea" ? (
          <Textarea {...inputProps} {...register(name)} minH="150px" />
        ) : (
          <Input {...inputProps} {...register(name)} />
        )}
        {errors[name] && (
          <FormErrorMessage>
            {errors[name]?.message?.toString()}
          </FormErrorMessage>
        )}
      </FormControl>
    </Motion>
  );
};

export default FormInput;
