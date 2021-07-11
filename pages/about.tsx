import Card from '../components/Card';
import { companies, education } from '../data/data';
import { Box, Icon, Flex, Stack, VStack, Text, useColorMode, Heading } from '@chakra-ui/react';
import { MdWork, MdSchool } from 'react-icons/md';

export default function About() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex justifyContent={'center'} flexDirection={'column'} mt={5} mx={[2, 2, 6]}>
        <Box>
          <Heading ml={[0, 0, 3]}>
            <Flex alignItems="center" mb={-5}>
              <Stack pl={3} mr={3}>
                <Icon as={MdWork} size={'lg'} />
              </Stack>
              <Text mt={0} mb={0}>
                Career
              </Text>
            </Flex>
          </Heading>
          <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12}>
            {companies.map((company) => (
              <Card
                key={company.title}
                title={company.title}
                role={company.role}
                skills={company.skills}
                period={company.period}
                logo={company.logo}
                colorMode={colorMode}
              />
            ))}
          </VStack>
        </Box>
        <Box>
          <Heading>
            <Flex alignItems="center" mb={-5}>
              <Text mt={0} mb={0}>
                Education
              </Text>
              <Stack pl={3}>
                <Icon as={MdSchool} size={'lg'} />
              </Stack>
            </Flex>
          </Heading>
          <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12}>
            {education.map((school) => (
              <Card
                key={school.title}
                title={school.title}
                role={school.role}
                skills={school.skills}
                period={school.period}
                logo={school.logo}
                colorMode={colorMode}
              />
            ))}
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
