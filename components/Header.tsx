import { Box, Container, Flex } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "react-feather";

const GRADIENT = "linear-gradient(90deg,#0c44fd,#e901d8)";

const Header = () => {
  const router = useRouter();
  return (
    <Box
      as="header"
      paddingY="4"
      position="fixed"
      left="0"
      top="0"
      right="0"
      zIndex="1"
    >
      <Container maxW="container.lg">
        <Flex as="nav" justifyContent="space-between">
          <Link href="/" passHref>
            <Button
              size={"sm"}
              mr={"4"}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              color={"#fff"}
              bg={GRADIENT}
              _hover={{ bg: GRADIENT }}
              _active={{ bg: GRADIENT }}
            >
              piazza
            </Button>
          </Link>
          <IconButton
            size={"sm"}
            display={["inline-flex", "none"]}
            aria-label="Menu"
            icon={<Menu />}
          />
          <Flex display={["none", "flex"]} alignItems="center">
            <Link href="/" passHref>
              <Button size={"sm"} mr="4" isActive={router.pathname === "/"}>
                Home
              </Button>
            </Link>
            <Link href="/updates" passHref>
              <Button
                size={"sm"}
                mr="4"
                isActive={router.pathname === "/updates"}
              >
                Updates
              </Button>
            </Link>
            <Link href="/manifesto" passHref>
              <Button size={"sm"} isActive={router.pathname === "/manifesto"}>
                Manifesto
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
