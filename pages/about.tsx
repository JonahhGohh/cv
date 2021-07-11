import Card from '../components/Card';
import { companies, education } from '../data/data';
import { Box, Icon, Flex, Stack, VStack, Text, useColorMode, Heading } from '@chakra-ui/react';
import { HiAcademicCap, HiBriefcase, HiUser } from 'react-icons/hi';

export default function About() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex justifyContent={'center'} flexDirection={'column'}>
        <Box>
          <Heading ml={[0, 0, 3]}>
            <Flex alignItems="center" mb={-5}>
              <Text mb={0}>About me</Text>
              <Stack pl={3}>
                <Icon as={HiUser} size={'lg'} />
              </Stack>
            </Flex>
          </Heading>
          <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12}>
            <Text fontSize="3xl" textAlign="justify">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
            </Text>
            <Text textAlign="justify">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </VStack>
        </Box>
        <Box>
          <Heading ml={[0, 0, 3]}>
            <Flex alignItems="center" mb={-5}>
              <Text mb={0}>Career</Text>
              <Stack pl={3}>
                <Icon as={HiBriefcase} size={'lg'} />
              </Stack>
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
          <Heading ml={[0, 0, 3]}>
            <Flex alignItems="center" mb={-5}>
              <Text mt={0} mb={0}>
                Education
              </Text>
              <Stack pl={3}>
                <Icon as={HiAcademicCap} size={'lg'} />
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
