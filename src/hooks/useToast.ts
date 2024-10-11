import { useToast as useChakraToast } from "@chakra-ui/react";

const useToast = () => {
  const toast = useChakraToast({
    duration: 5000,
    isClosable: true,
    variant: "subtle",
    position: 'top-right'
  });

  return toast;
};

export default useToast;
