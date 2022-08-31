import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>
          <a>{buttonText}</a>
        </Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <div>
      <h1> Hello World</h1>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://cdn-cms.pgimgs.com/static/2017/06/Handshake-over-Property-Deal.jpg"
      />
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-rent"
        imageUrl="https://cdn-cms.pgimgs.com/static/2017/06/Handshake-over-Property-Deal.jpg"
      />
    </div>
  );
}
