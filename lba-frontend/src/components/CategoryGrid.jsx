import { SimpleGrid } from "@mantine/core";
import { CategoryCard } from "./CategoryCard";
import { Link } from "react-router-dom";

/*
	* Make axios request.
	* categories.map((products) => (
		<CategoryCard imageUrl={products.imageUrl}
                title={products.title}
                endpoint={"/products/" + products.endpoint}
	))
*/

export function CategoryGrid() {
    return (
        <SimpleGrid
            cols={{ base: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
            spacing={{ base: "md", sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
            px={{ base: 75, sm: 100, md: 125, lg: 300, xl: 350 }}
        >
            <Link to={"/products/cat1"}>
                <CategoryCard
                    imageUrl={""}
                    title={"Cat 1"}
                    endpoint={"/products/cat1"}
                />
            </Link>
            <CategoryCard
                imageUrl={""}
                title={"Cat 2"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 3"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 4"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 5"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 6"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 7"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 4"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 5"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 6"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 7"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 4"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 5"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 6"}
                endpoint={"/products/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 7"}
                endpoint={"/products/cat1"}
            />
        </SimpleGrid>
    );
}
