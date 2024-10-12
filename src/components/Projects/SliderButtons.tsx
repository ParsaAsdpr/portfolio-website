import { HStack } from "@chakra-ui/react";
import Button from "../common/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Motion from "../common/Motion";

const SliderButtons = ({
  offset,
  setOffset,
  projectLength,
}: {
  offset: number;
  projectLength: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
      <HStack justifyContent="end" w="full">
        {offset !== 0 && (
          <Motion
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              py={2.5}
              px={3}
              transform="rotate(180deg)"
              onClick={() => setOffset(offset - 1)}
              visibility={offset === 0 ? "hidden" : "visible"}
            >
              <IoIosArrowRoundForward fontSize={30} />
            </Button>
          </Motion>
        )}
        {offset < projectLength - 3 && (
          <Motion
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              py={2.5}
              px={3}
              visibility={offset === projectLength - 1 ? "hidden" : "visible"}
              onClick={() => setOffset(offset + 1)}
            >
              <IoIosArrowRoundForward fontSize={30} />
            </Button>
          </Motion>
        )}
      </HStack>
  );
};

export default SliderButtons;
