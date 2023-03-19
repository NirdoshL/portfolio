import { HStack, Box, Text, useMediaQuery, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


export default function Skills() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');
  return (
    <div id="2">
      <Text fontSize={"5xl"}
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
        Skills
      </Text>
      <div style={{ height: "100vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Box>
          <HStack alignItems={"center"} spacing={"5"}>
            <CircularProgress color={'cyan.900'} value={90} size={isNotSmallerScreen ? "200" : "100"}>
              <CircularProgressLabel color={'cyan.900'} fontSize={isNotSmallerScreen ? "3xl" : "20px"}>React <br /> 90%</CircularProgressLabel>
            </CircularProgress>
            <CircularProgress color={'cyan.700'} value={90} size={isNotSmallerScreen ? "200" : "100"}>
              <CircularProgressLabel color={'cyan.700'} fontSize={isNotSmallerScreen ? "3xl" : "20px"}>Node <br /> 70%</CircularProgressLabel>
            </CircularProgress>
            <CircularProgress color={'cyan.700'} value={90} size={isNotSmallerScreen ? "200" : "100"}>
              <CircularProgressLabel color={'cyan.700'} fontSize={isNotSmallerScreen ? "3xl" : "20px"}>Flutter <br /> 70%</CircularProgressLabel>
            </CircularProgress>
          </HStack>
        </Box>
      </div>
    </div>
  )
}