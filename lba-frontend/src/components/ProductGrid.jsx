import { SimpleGrid } from "@mantine/core";
import { ProductCard } from "./ProductCard";

/*
	* Make axios request.
	* categories.map((category) => (
		<ProductCard imageUrl={category.imageUrl}
                title={category.title}
                endpoint={"/category/" + category.endpoint}
	))
*/

export function ProductGrid() {
    return (
        <SimpleGrid
            cols={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
            px={{ base: 75, sm: 100, md: 100, lg: 200, xl: 250 }}
        >
            <ProductCard
                imageUrl={""}
                title={"Cat 1"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 2"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 3"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 4"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 5"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 6"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 7"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 4"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 5"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 6"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 7"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 4"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 5"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 6"}
                endpoint={"/category/cat1"}
            />
            <ProductCard
                imageUrl={""}
                title={"Cat 7"}
                endpoint={"/category/cat1"}
            />
        </SimpleGrid>
    );
}
