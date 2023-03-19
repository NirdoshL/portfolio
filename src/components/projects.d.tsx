import { Carousel } from 'react-responsive-carousel';
import data from "../data/data.json";
import { Image, Text, Stack, Heading, Flex } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"


export default function Project() {
  return (
    <div id="3" style={{ height: "100vh" }}>
      <Carousel
        showArrows={false}
        showIndicators={false}
        interval={1500}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
      >
        {
          data.projects.map((project, index) => (
            <div key={index}>
              <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                  <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                      <Text
                        as={'span'}
                        position={'relative'}
                        _after={{
                          content: "''",
                          width: 'full',
                          height: "25%",
                          position: 'absolute',
                          bottom: 1,
                          left: 0,
                          bg: 'blue.400',
                          zIndex: -1,
                        }}>
                        Projects
                      </Text>
                      <br />{' '}
                      <Text color={'blue.400'} as={'span'}>
                        {project.title}
                      </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                      {project.desc}
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                    </Stack>
                  </Stack>
                </Flex>
                <Flex flex={1}>
                  <Image
                    alt={project.title}
                    objectFit={'cover'}
                    objectPosition={"top"}
                    pt={"10"}
                    height={"90vh"}
                    borderRadius={"20px"}
                    src={project.image}
                  />
                </Flex>
              </Stack>
            </div>
          )

          )
        }
      </Carousel>
    </div>
  )
}
