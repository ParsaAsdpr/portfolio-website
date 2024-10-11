"use client";
import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { chakra } from "@chakra-ui/react";
import FormInput from "./FormInput";
import Button from "../common/Button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "@/validation/schema";
import { z } from "zod";
import useToast from "@/hooks/useToast";

type Schema = z.infer<typeof schema>;

const ContactForm = () => {
  const toast = useToast();
  const inputs = [
    {
      name: "name",
      placeholder: "Your Name",
      type: "text",
    },
    {
      name: "email",
      placeholder: "Your Email",
      type: "email",
    },
    {
      name: "subject",
      placeholder: "Subject",
      type: "text",
    },
    {
      name: "message",
      placeholder: "Your Message",
      type: "textarea",
    },
  ];

  const methods = useForm<Schema>({
    shouldUseNativeValidation: false,
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Schema) => {
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      toast({
        title: "Success",
        description: "Your message has been sent successfully",
        status: "success",
      });
    } else if (response.status < 500 && response.status >= 400) {
      const res = await response.json();
      toast({
        title: "Something went wrong",
        description: res.error,
        status: "error",
      });
    } else {
      toast({
        title: "Something went wrong",
        description: "There has been an unexpected error.",
        status: "error",
      });
    }
  };
  return (
    <VStack alignItems="start" mb={20} w="full" spacing={14}>
      <Text fontStyle="italic" fontSize={45} fontWeight={700}>
        Let&apos;s Work Together
      </Text>

      <chakra.form
        w="full"
        display="flex"
        flexDir="column"
        gap={9}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormProvider {...methods}>
          <HStack w="full" spacing={6}>
            {inputs.slice(0, 2).map((input) => (
              <FormInput key={input.name} {...input} />
            ))}
          </HStack>
          {inputs.slice(2).map((input) => (
            <FormInput key={input.name} {...input} />
          ))}
          <Button fontWeight={700} fontSize={15} py={4} type="submit">
            Send Message
          </Button>
        </FormProvider>
      </chakra.form>
    </VStack>
  );
};

export default ContactForm;
