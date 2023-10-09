import { Stack, Divider, Center, Title } from "@mantine/core";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useParams } from "react-router-dom";

function Product() {
    const { productName } = useParams();

    return (
        <Stack>
            <Header />
            <Center>
                <Title>{productName}</Title>
            </Center>
            <Divider my="sm" />
            <Footer />
        </Stack>
    );
}

export default Product;
