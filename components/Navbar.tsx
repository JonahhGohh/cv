import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Icon
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { FaMoon, FaSun } from 'react-icons/fa';
import NextLink from 'next/link';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  const link = {
    bg: useColorModeValue('gray.200', 'gray.900'),
    color: useColorModeValue('blue.500', 'blue.200')
  };
  return (
    <NextLink href={props.path} passHref>
      <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: link.bg
        }}
        onClick={() => props.onClose()}
      >
        {props.name}
      </Link>
    </NextLink>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.700')} px={4} boxShadow={'lg'}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          w={['90%', '85%', '80%']}
          maxW={800}
          mx="auto"
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={['inherit', 'inherit', 'none']}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {navLinks.map((link, index) => (
                <NavLink key={index} name={link.name} path={link.path} onClose={onClose} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <IconButton
              as={Link}
              href={'https://github.com/JonahhGohh'}
              size={'md'}
              icon={<FaGithub />}
              aria-label={'Github account'}
              bg={useColorModeValue('white', 'gray.700')}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.900')
              }}
            />
            <IconButton
              as={Link}
              href={'https://www.linkedin.com/in/jonah-goh/'}
              size={'md'}
              icon={<RiLinkedinBoxFill />}
              aria-label={'Linkedin Account'}
              bg={useColorModeValue('white', 'gray.700')}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.900')
              }}
            />
            <IconButton
              icon={colorMode == 'dark' ? <Icon as={FaSun} /> : <Icon as={FaMoon} />}
              onClick={toggleColorMode}
              aria-label={'Github account'}
              bg={useColorModeValue('white', 'gray.700')}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.900')
              }}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} w={['100%', '100%', '80%']} maxW={800} display={['inherit', 'inherit', 'none']}>
            <Stack as={'nav'} spacing={4}>
              {navLinks.map((link, index) => (
                <NavLink key={index} index={index} name={link.name} path={link.path} onClose={onClose} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
