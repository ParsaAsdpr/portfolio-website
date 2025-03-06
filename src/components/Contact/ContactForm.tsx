"use client";
import { SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { chakra } from "@chakra-ui/react";
import FormInput from "./FormInput";
import Button from "../common/Button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "@/validation/schema";
import { z } from "zod";
import useToast from "@/hooks/useToast";
import Motion from "../common/Motion";

type Schema = z.infer<typeof schema>;

const ContactForm = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
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
    if (isLoading) return;
    setIsLoading(true);
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
      return setIsLoading(false);
    } else if (response.status < 500 && response.status >= 400) {
      const res = await response.json();
      toast({
        title: "Something went wrong",
        description: res.error,
        status: "error",
      });
      return setIsLoading(false);
    } else {
      toast({
        title: "Something went wrong",
        description: "There has been an unexpected error.",
        status: "error",
      });
      return setIsLoading(false);
    }
  };
  return (
    <VStack alignItems="start" mb={20} w="full" spacing={14}>
      <Motion
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%" }}
      >
        <Text
          fontStyle="italic"
          fontSize={[27, 30, 35, 40, 45]}
          textAlign={{ base: "center", lg: "left" }}
          fontWeight={700}
        >
          Let&apos;s Work Together
        </Text>
      </Motion>

      <chakra.form
        w="full"
        display="flex"
        flexDir="column"
        gap={9}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormProvider {...methods}>
          <SimpleGrid columns={{ base: 1, sm: 2 }} w="full" spacing={6}>
            {inputs.slice(0, 2).map((input, i) => (
              <FormInput key={input.name} {...input} delay={i * 0.2} />
            ))}
          </SimpleGrid>
          {inputs.slice(2).map((input, i) => (
            <FormInput key={input.name} {...input} delay={i * 0.2 * 0.2} />
          ))}
          <Motion
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ width: "100%" }}
          >
            <Button
              fontWeight={700}
              w="full"
              fontSize={[13, 14, 15]}
              py={[3, 3, 4]}
              type="submit"
            >
              {isLoading ? <Spinner /> : "Send Message"}
            </Button>
          </Motion>
        </FormProvider>
      </chakra.form>
    </VStack>
  );
};

export default ContactForm;
