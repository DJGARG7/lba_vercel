import { useDisclosure } from "@mantine/hooks";
import { Image, Card, Text, Group, Button } from "@mantine/core";
import classes from "./ProductCard.module.css";
import { Link } from "react-router-dom";

export function ProductCard({ product }) {
    const [{ open }] = useDisclosure(false);

    return (
        <Card radius="md" withBorder padding="xl">
            <Card.Section>
                <Image
                    src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                    h={250}
                    alt="No way!"
                />
            </Card.Section>

            <Group justify="space-between" mt="lg">
                <Text fw={500} fz="lg">
                    Forde, Norway
                </Text>

                {/* <Group gap={5}>
                    <IconStar style={{ width: rem(16), height: rem(16) }} />
                    <Text fz="xs" fw={500}>
                        4.78
                    </Text>
                </Group> */}
            </Group>

            <Text fz="sm" c="dimmed" mt="sm">
                Relax, rejuvenate and unplug in this unique contemporary
                Birdbox. Feel close to nature in ultimate comfort. Enjoy the
                view of the epic mountain range of Blegja and the Førdefjord.
            </Text>

            <Group justify="space-between" mt="md">
                <div>
                    <Text fz="xl" span fw={500} className={classes.price}>
                        ₹123
                    </Text>
                    <Text span fz="sm" c="dimmed">
                        {" "}
                        / pc
                    </Text>
                </div>

                <Link to="/products/cat1/product1">
                    <Button radius="md" color="grape" onClick={open}>
                        View
                    </Button>
                </Link>
            </Group>

            {/* <Modal
                opened={opened}
                onClose={close}
                title="Product title"
                centered
                size="75%"
                radius={0}
                transitionProps={{ transition: "fade", duration: 200 }}
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}
            >
                <Input placeholder="Input component" />
            </Modal> */}
        </Card>
    );
}
