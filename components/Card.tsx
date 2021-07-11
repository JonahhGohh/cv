import React from 'react';
import { Box, Stack, Heading, Flex, Text, Tag, Image, useColorModeValue } from '@chakra-ui/react';

interface CardProps {
  title: string;
  role: string;
  skills: string[];
  period: string;
  logo: string;
  colorMode: string;
  alt?: string;
}

export default function Card(props: CardProps) {
  const { title, role, skills, period, logo, colorMode, alt } = props;
  return (
    <Box
      px={4}
      py={5}
      borderWidth="1px"
      _hover={{ shadow: 'lg' }}
      bg={useColorModeValue('white', 'gray.800')}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image
            rounded="full"
            w={16}
            h={16}
            objectFit="cover"
            fallbackSrc={'/assets/images/placeholder.png'}
            src={logo}
            alt={alt}
          />
          <Stack spacing={2} pl={3} align="left">
            <Heading align="left" fontSize="xl" color={`mode.${colorMode}.career.text`}>
              {title}
            </Heading>
            <Heading align="left" fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
              {role}
            </Heading>
            <Stack spacing={1} mt={3} isInline alignItems="center" display={['none', 'none', 'flex', 'flex']}>
              {skills.map((skill) => (
                <Tag size="sm" padding="0 3px" key={skill}>
                  {skill}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Flex>
        <Stack display={['none', 'none', 'flex', 'flex']}>
          <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
            {period}
          </Text>
        </Stack>
      </Flex>
      <Stack spacing={1} mt={3} isInline alignItems="center" display={['flex', 'flex', 'none', 'none']}>
        {skills.map((skill) => (
          <Tag size="sm" padding="0 3px" key={skill}>
            {skill}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
}
