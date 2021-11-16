import * as React from "react";
import {
    NativeBaseProvider,
    Text,
    Button,
    Box,
    AspectRatio,
    Image,
    Center,
    Stack,
    Heading,
    VStack,
    HStack,
    Pressable
} from "native-base";
import { GivenNameText } from "../components/InfoText";

export const Cards = () => {
    return (
        <Center mt="4">
            <Box
                maxW="90%"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                bgColor="#ffffff"
            >
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                            source={{
                                uri: "https://groupproject26.top/images/banner3.png",
                            }}
                            alt="image"
                        />
                    </AspectRatio>
                    <Center position="absolute" top="2" px="5" py="1.5">
                        <GivenNameText></GivenNameText>
                    </Center>
                </Box>
                <HStack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            HK-UFit
                        </Heading>
                        <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                            COMP3330 Group Project
                        </Text>
                    </Stack>
                    <VStack position="absolute" right="5" top="5">
                        <Center>
                            <Button
                                colorScheme="primary"
                                variant="subtle"
                                onPress={() => {
                                    console.log("hello");
                                }}
                            >
                                Read More
                            </Button>
                        </Center>
                    </VStack>
                </HStack>
            </Box>

            <Center>
                <VStack mt="4" mx="4" maxW="90%" space="2">
                    <HStack alignItems="center">
                        <Box w="50%" h="120" p="1">
                            <Image
                                h="100%"
                                rounded="lg"
                                alt="card1"
                                source={require("../assets/images/card1.png")}
                            />
                            <Center
                                position="absolute"
                                top="10"
                                px="5"
                                py="1.5"
                            >
                                <Text color="white">Monitoring</Text>
                            </Center>
                        </Box>
                        <Box w="50%" h="120" p="1">
                            <Image
                                h="100%"
                                rounded="lg"
                                alt="card1"
                                source={require("../assets/images/card4.png")}
                            />
                            <Center
                                position="absolute"
                                top="8"
                                px="5"
                                py="1.5"
                            >
                                <Text color="white">
                                    Facilities{"\n"}Booking
                                </Text>
                            </Center>
                        </Box>
                    </HStack>
                    <HStack alignItems="center">
                        <Box w="50%" h="120" p="1">
                            <Image
                                h="100%"
                                rounded="lg"
                                alt="card1"
                                source={require("../assets/images/card3.png")}
                            />
                            <Center position="absolute" top="8" px="5" py="1.5">
                                <Text color="white">
                                    Social{"\n"}Networking
                                </Text>
                            </Center>
                        </Box>
                        <Box w="50%" h="120" p="1">
                            <Image
                                h="100%"
                                rounded="lg"
                                alt="card1"
                                source={require("../assets/images/card2.png")}
                            />
                            <Center
                                position="absolute"
                                top="10"
                                px="5"
                                py="1.5"
                            >
                                <Text color="white">Progress</Text>
                            </Center>
                        </Box>
                    </HStack>
                </VStack>
            </Center>
        </Center>
    );
};

export default function Home({ navigation }) {

    return (
        <>
            <NativeBaseProvider>
                <Cards/>
            </NativeBaseProvider>
        </>
    );
}