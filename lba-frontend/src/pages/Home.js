import { Container, Flex, Stack, Title } from "@mantine/core";
import { Header } from "../components/Header";
import { CardsCarousel } from "../components/CardsCarousel";

function Home() {
    return (
        <>
            <Stack>
                <Header />
                <Title>Home</Title>
            </Stack>
        </>
    );
}

export default Home;
