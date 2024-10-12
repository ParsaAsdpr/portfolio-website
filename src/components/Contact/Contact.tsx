"use client";
import { SimpleGrid, Text, Tooltip, VStack } from "@chakra-ui/react";
import React from "react";
import Title from "../common/Title";
import ContactForm from "./ContactForm";
import useToast from "@/hooks/useToast";
import Motion from "../common/Motion";

const Contact = () => {
  const toast = useToast();
  const contactInfo = [
    {
      title: "Email",
      text: "parsaasadpour.1999@gmail.com",
    },
    {
      title: "Phone Number",
      text: "(+98) 9939604178",
    },
  ];
  return (
    <VStack gap="7rem">
      <Title>Contact</Title>

      <SimpleGrid columns={2} gap={10} maxW="7xl" w="full" mx="auto">
        <ContactForm />
        <VStack alignItems="center">
          <VStack alignItems="start" gap={8}>
            <Motion
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Text fontStyle="italic" fontSize={30} fontWeight={700} mb={4}>
                Get In Touch
              </Text>
            </Motion>
            {contactInfo.map((info) => (
              <VStack key={info.title} alignItems="start">
                <Motion
                  initial={{ opacity: 0, y: "50%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Text fontSize={19} fontWeight={700}>
                    {info.title}
                  </Text>
                </Motion>
                <Motion
                  initial={{ opacity: 0, y: "50%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Tooltip
                    label="Click to Copy"
                    hasArrow
                    bg="#333"
                    placement="bottom"
                  >
                    <Text
                      color="#777"
                      fontWeight={400}
                      fontSize={16}
                      cursor="pointer"
                      onClick={() =>
                        navigator.clipboard.writeText(info.text).then(() =>
                          toast({
                            title: "Text copied successfully.",
                            status: "success",
                          })
                        )
                      }
                    >
                      {info.text}
                    </Text>
                  </Tooltip>
                </Motion>
              </VStack>
            ))}
          </VStack>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default Contact;
