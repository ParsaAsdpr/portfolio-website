"use client";
import { SimpleGrid, Text, Tooltip, VStack } from "@chakra-ui/react";
import React from "react";
import Title from "../common/Title";
import ContactForm from "./ContactForm";
import useToast from "@/hooks/useToast";
import Motion from "../common/Motion";
import contactInfo from "../../constants/contact.json";

const Contact = () => {
  const toast = useToast();

  return (
    <VStack gap="7rem" id="contact">
      <Title>Contact</Title>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap={10}
        maxW="7xl"
        w="full"
        mx="auto"
        px={{ base: 5, sm: 7, "2xl": 0 }}
      >
        <ContactForm />
        <VStack alignItems={{ base: "left", lg: "center" }}>
          <VStack alignItems="start" gap={8}>
            <Motion
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Text
                fontStyle="italic"
                fontSize={[23, 25, 27, 30]}
                fontWeight={700}
                mb={4}
              >
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
