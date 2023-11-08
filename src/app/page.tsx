import { Flex } from '@chakra-ui/react';
import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import Insert from './operations/insert/page';

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        h="100vh"
        flexDirection="column"
      >
        {session ? (
          <Insert />
        ) : (
          <h1 className="text-5xl">Faça login para prosseguir!</h1>
        )}
      </Flex>
    </>
  );
}
