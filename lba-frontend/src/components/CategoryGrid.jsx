import { SimpleGrid } from "@mantine/core";
import { CategoryCard } from "./CategoryCard";

/*
	* Make axios request.
	* categories.map((category) => (
		<CategoryCard imageUrl={category.imageUrl}
                title={category.title}
                endpoint={"/category/" + category.endpoint}
	))
*/

export function CategoryGrid() {
    return (
        <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 4 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
            px={100}
        >
            <CategoryCard
                imageUrl={""}
                title={"Cat 1"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 2"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 3"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 4"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 5"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 6"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 7"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 4"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 5"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 6"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 7"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 4"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 5"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 6"}
                endpoint={"/category/cat1"}
            />
            <CategoryCard
                imageUrl={""}
                title={"Cat 7"}
                endpoint={"/category/cat1"}
            />
        </SimpleGrid>
    );
}
