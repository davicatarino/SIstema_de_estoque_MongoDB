'use client';
import React from 'react';
import { Box, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const SidebarNav = () => {
  const router = useRouter();

  return (
    <Stack
      width="18vw"
      spacing="6"
      height="100vh"
      mx="auto"
      px="2"
      py="2"
      align="center"
      boxShadow="1px 0px 0px 0px #ccc"
    >
      <Stack marginTop="35px">
        {/*    <Text fontSize="xs" fontWeight="bold" color="gray.400">
          CADASTRO
        </Text> */}
        <Stack>
          <ChakraLink
            _hover={{ bg: 'gray.100' }}
            px="4"
            py="2"
            borderRadius={5}
          >
            <Button
              type="button"
              onClick={() => router.push('/operations/insert')}
            >
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                Inserção
              </Text>
            </Button>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: 'gray.100' }}
            px="4"
            py="2"
            borderRadius={5}
          >
            <Button
              type="button"
              onClick={() => router.push('/operations/edit/id')}
            >
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                Edição
              </Text>
            </Button>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: 'gray.100' }}
            px="4"
            py="2"
            borderRadius={5}
          >
            <Button
              type="button"
              onClick={() => router.push('/operations/balance')}
            >
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                balanço
              </Text>
            </Button>
          </ChakraLink>
        </Stack>
        {/*  <Stack>
          <ChakraLink
            _hover={{ bg: 'gray.100' }}
            px="4"
            py="2"
            borderRadius={5}
          >
            <Link href="/operations/product">
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                PRODUTOS
              </Text>
            </Link>
          </ChakraLink>
        </Stack> */}
      </Stack>
    </Stack>
  );
};

export default SidebarNav;
