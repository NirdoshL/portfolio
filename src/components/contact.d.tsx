import hello from "../assets/hello.gif"
import { Formik, Field } from "formik";
import {
    Box,
    Button,
    Flex,
    useMediaQuery,
    FormControl,
    FormLabel,
    Text,
    FormErrorMessage,
    Input,
    useToast,
    VStack,
    Textarea,
    Image
} from "@chakra-ui/react";


export default function Contact() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 768px)');
    const toast = useToast();
    const showToast = (titleRes: string, descRes: string, statusRes: any) => {
        toast({
            title: titleRes,
            description: descRes,
            isClosable: true,
            duration: 5000,
            status: statusRes
        })
    }
    async function sendContact(ev: any) {
        const senderName = ev.name;
        const senderEmail = ev.email;
        const senderMessage = ev.message;

        const webhookBody = {
            embeds: [{
                title: 'Form Submitted by ' + senderName,
                fields: [
                    { name: 'Sender:', value: senderEmail },
                    { name: 'Message:', value: senderMessage }
                ]
            }],
        };

        const webhookUrl = 'https://discordapp.com/api/webhooks/1086987378981343252/OvSX43HUU01d1W4v_CsP9TBLqyaKWOUjHfwz8n8pVftr_QcNch9UrLS7UDPcItADco4v';

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookBody),
        });

        if (response.ok) {
            showToast("Thank You!", "I have received your message!", "success")
        } else {
            showToast("Sorry!", "There was an error! Try again later!", "error")
        }
    }
    return (
        <div id='4' style={{ height: isNotSmallerScreen ? "100vh" : "100vh" }}>
            <Box mt={isNotSmallerScreen ? "0rem" : "12rem"}>
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
                    Contact Me
                </Text>
            </Box>
            <Flex flexDirection={isNotSmallerScreen ? "row" : "column"}
                bg="gray.100"
                align={isNotSmallerScreen ? "flex-start" : "center"} h="100vh"
                borderRadius={"20px"}>
                <Box bg={"white"} p={6} rounded="md" w={isNotSmallerScreen ? 80 : 64}>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            message: "",
                        }}
                        onSubmit={(values, { resetForm }) => {
                            if (values.email === "") {
                                alert("Email is Required.")
                            } else {
                                sendContact(values);
                                resetForm({
                                    values: {
                                        name: "",
                                        email: "",
                                        message: ""
                                    }
                                });
                            }
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={4} align="flex-start">
                                    <FormControl>
                                        <FormLabel color={"blackAlpha.900"} htmlFor="name">Your Name</FormLabel>
                                        <Field
                                            as={Input}
                                            id="name"
                                            color="blackAlpha.900"
                                            name="name"
                                            type="text"
                                            variant="filled"
                                            borderColor="black"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color={"blackAlpha.900"} htmlFor="email">Email Address</FormLabel>
                                        <Field
                                            as={Input}
                                            id="email"
                                            name="email"
                                            color="blackAlpha.900"
                                            type="email"
                                            variant="filled"
                                            borderColor="black"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color={"blackAlpha.900"} htmlFor="message">Your Message</FormLabel>
                                        <Field
                                            as={Textarea}
                                            maxLength={300}
                                            id="message"
                                            rows="6"
                                            color="blackAlpha.900"
                                            name="message"
                                            type="message"
                                            variant="filled"
                                            borderColor="black"
                                        />
                                        <FormErrorMessage>{errors.message}</FormErrorMessage>
                                    </FormControl>
                                    <Button type="submit" colorScheme="purple" width="full">
                                        Submit
                                    </Button>
                                </VStack>
                            </form>
                        )}
                    </Formik>
                </Box>
                {
                    isNotSmallerScreen ? <Image src={hello} borderRadius={"20px"} height={"100vh"} width={"50%"} aria-label='image' /> : null}
            </Flex>
        </div>
    )
}