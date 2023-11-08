'use client';
import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Img,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      mx="auto"
      px="100px"
      py="25px"
      align="center"
      boxShadow="0 1px 0 #ccc"
      color="white"
      fontWeight="bold"
    >
      <Image
        borderRadius="100%"
        boxSize="50px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Flex ml="auto">
        <HStack>
          <Text>Victor Gomes</Text>
        </HStack>
      </Flex>
      <Flex ml="auto">
        <HStack>
          <Link href="/api/auth/signin">Sign In</Link>
          <Link href="/api/auth/signout">Sign Out</Link>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;

/* import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onOpen } = useSidebarContext();

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1120}
      h="20"
      mx="auto"
      px="2"
      py="2"
      align="center"
      boxShadow="0 1px 0 #ccc"
      color="gray.500"
      fontWeight="bold"
    >
      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )}
      <Text>LOGO</Text>
      <Flex ml="auto">
        <HStack>
          <Text>Victor Gomes</Text>
          <Avatar size="md" name="Victor Gomes" />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
 */
