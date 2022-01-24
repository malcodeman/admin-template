import React from "react";
import { Box, Container, Flex } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { Portal } from "@chakra-ui/portal";
import { useDisclosure } from "@chakra-ui/hooks";
import { useMediaQuery } from "@chakra-ui/react";
import { Menu, X } from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";
import { map } from "ramda";

import constants from "../lib/constants";

import MobileMenu from "./MobileMenu";

const GRADIENT = "linear-gradient(90deg,#0c44fd,#e901d8)";

const Header = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan30Em] = useMediaQuery("(min-width: 30em)");

  React.useEffect(() => {
    onClose();
  }, [router.pathname, onClose]);

  React.useEffect(() => {
    if (isLargerThan30Em) {
      onClose();
    }
  }, [isLargerThan30Em, onClose]);

  function renderMenuButton() {
    return (
      <React.Fragment>
        {isOpen ? (
          <IconButton
            size={"sm"}
            display={["inline-flex", "none"]}
            aria-label="Close"
            icon={<X />}
            onClick={onClose}
          />
        ) : (
          <IconButton
            size={"sm"}
            display={["inline-flex", "none"]}
            aria-label="Menu"
            icon={<Menu />}
            onClick={onOpen}
          />
        )}
        {isOpen ? (
          <Portal>
            <MobileMenu />
          </Portal>
        ) : null}
      </React.Fragment>
    );
  }

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
          {renderMenuButton()}
          <Flex display={["none", "flex"]} alignItems="center">
            {map(
              (item) => (
                <Link href={item.value} passHref>
                  <Button
                    size={"sm"}
                    mr={item.value === "/manifesto" ? "0" : "4"}
                    isActive={router.pathname === item.value}
                  >
                    {item.label}
                  </Button>
                </Link>
              ),
              constants.MENU
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
