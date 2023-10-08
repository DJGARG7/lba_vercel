import { Stack, Divider, Center, Title } from "@mantine/core";
import { Header } from "../components/Header";
import { CategoryGrid } from "../components/CategoryGrid";
import { Footer } from "../components/Footer";
import { ProductGrid } from "../components/ProductGrid";

function Home() {
    return (
        <Stack>
            <Header />
            <Center>
                <Title>Our Products</Title>
            </Center>
            <Divider my="sm" />
            <CategoryGrid />
            <ProductGrid />
            <Footer />
        </Stack>
    );
}

export default Home;
