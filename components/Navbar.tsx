import { ReactNode } from 'react';
import { Box, Flex, HStack, Link, Menu, MenuButton, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { MdWbSunny } from 'react-icons/md';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
    href={'#'}
  >
    {children}
  </Link>
);

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
          <HStack spacing={8} alignItems={'center'}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={'center'} marginLeft={'auto'} position={'absolute'} left={'95%'}>
            <Menu>
              <MenuButton onClick={() => toggleColorMode()}>
                {colorMode == 'light' ? <MoonIcon /> : <Icon as={MdWbSunny} />}
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
