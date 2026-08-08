import { HStack } from "@chakra-ui/react";
import Button from "../common/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const SliderButtons = ({
  offset,
  setOffset,
  projectLength,
  itemsPerView,
}: {
  offset: number;
  projectLength: number;
  itemsPerView: number | undefined;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const canGoPrev = offset > 0;
  const canGoNext = offset < projectLength - (itemsPerView || 3);

  return (
    <HStack justifyContent="end" w="full">
      <Button
        py={2.5}
        px={3}
        transform="rotate(180deg)"
        onClick={() => canGoPrev && setOffset(offset - 1)}
        disabled={!canGoPrev}
      >
        <IoIosArrowRoundForward fontSize={30} />
      </Button>
      <Button
        py={2.5}
        px={3}
        onClick={() => canGoNext && setOffset(offset + 1)}
        disabled={!canGoNext}
      >
        <IoIosArrowRoundForward fontSize={30} />
      </Button>
    </HStack>
  );
};

export default SliderButtons;
