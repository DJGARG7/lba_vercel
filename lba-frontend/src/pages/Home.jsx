import { Stack, Divider, Center, Title } from "@mantine/core";
import { Header } from "../components/Header";
import { CategoryGrid } from "../components/CategoryGrid";
import { Footer } from "../components/Footer";

function Home() {
    return (
        <Stack>
            <Header />
            <Center>
                <Title>Our Products</Title>
            </Center>
            <Divider my="sm" />
            <CategoryGrid />
            <Footer />
        </Stack>
    );
}

export default Home;