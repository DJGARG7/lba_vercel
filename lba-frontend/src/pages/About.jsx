import { Stack, Title, Divider, Center } from "@mantine/core";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function About() {
    return (
        <Stack>
            <Header></Header>
            <Center>
                <Title>About Us</Title>
            </Center>
            <Divider my="sm" />
            <Footer />
        </Stack>
    );
}

export default About;
