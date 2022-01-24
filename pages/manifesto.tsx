import { Box, Heading, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";

const Manifesto: NextPage = () => {
  return (
    <Box>
      <Heading fontSize={"2xl"} textTransform={"uppercase"} mb={"2"}>
        The manifesto
      </Heading>
      <Text>Here comes a new wave...</Text>
      <Text>And surfing here is different.</Text>
      <Text>Breaking down barriers.</Text>
      <Text>Building open communities.</Text>
      <Text>Creating magic internet money with our friends.</Text>
      <Text>To those who don&apos;t get it, we tell them: gm.</Text>
      <Text mb={"2"}>They&apos;ll come around eventually.</Text>
      <Text>
        Here&apos;s to the ones with the courage to jump down a peculiar rabbit
        hole.
      </Text>
      <Text>
        One that pulls you away from a world that&apos;s created by many and
        owned by few...
      </Text>
      <Text>To a world that&apos;s created by more and owned by all.</Text>
      <Text mb={"2"}>
        From The Garden come the human beans that sprout into your family.
      </Text>
      <Text>We rise together.</Text>
      <Text>We build together.</Text>
      <Text mb={"2"}>We grow together.</Text>
      <Text>Ready to take the red bean?</Text>
    </Box>
  );
};

export default Manifesto;
