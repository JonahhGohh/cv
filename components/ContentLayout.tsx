import { Fragment } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <Box textAlign="center" fontSize="xl" w={['90%', '85%', '80%']} maxW={800} mx="auto">
        <Box pt={10} pb={10}>
          {props.children}
        </Box>
      </Box>
    </Fragment>
  );
}

export default Layout;
