import { useContext } from "react";
import Image from "next/image";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowCircleLeft}
        onClick={scrollPrev}
        fontSize="2x1"
        cursor="pointer"
      />
    </Flex>
  );
};
const ImageScrollbar = ({ data }) => {
  return;
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box key={item.id} width="910px" itemId={item.id} overflow="hidden" p="1">
        <Image
          alt="property"
          placeholder="blue"
          blurDataURL={item.url}
          src={item.url}
          width={1000}
          height={500}
          sizes="(max-width:500px) 100px, (max-width): 1023px 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>;
};

export default ImageScrollbar;
