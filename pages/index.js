import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Center, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
const Index = () => {
  return (
    <div className="container" id="principal">
      <Head>
        <title>INFO104 Hola Mundo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex flexDirection="column">
          <Center h="400px" mt="200px">
            <Image
              src="/images/eye.png"
              height={294} // Desired size with correct aspect ratio
              width={470} // Desired size with correct aspect ratio
              alt="ojo"
            />
          </Center>
          <Center mt="10px" mb="20px">
            <Button colorScheme="teal" size="lg" w="200px">
              Hola Mundo!
            </Button>
          </Center>
        </Flex>
      </main>

      <footer>
        <a href="https://github.com/mallium/info104-ejemplos" target="_blank">
          Repositorio y tutorial
        </a>
        &nbsp;-&nbsp;
        <Link href="/about">
          <a>Sobre esta página</a>
        </Link>
      </footer>
    </div>
  );
};

export default Index;
