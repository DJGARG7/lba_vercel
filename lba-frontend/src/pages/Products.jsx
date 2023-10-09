import { Stack, Divider, Center, Title } from "@mantine/core";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductGrid } from "../components/ProductGrid";
import { useParams } from "react-router-dom";

function Products() {
    const { categoryName } = useParams();

    return (
        <Stack>
            <Header />
            <Center>
                <Title>{categoryName}</Title>
            </Center>
            <Divider my="sm" />
            <ProductGrid />
            <Footer />
        </Stack>
    );
}

export default Products;
