import { Container, rem, Button, Text } from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";
import classes from "./Footer.module.css";

export function Footer() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Button
                    variant="filled"
                    component="a"
                    href="https://www.instagram.com/lotusbottleart/"
                    target="_blank"
                >
                    <IconBrandInstagram
                        style={{ width: rem(18), height: rem(18) }}
                        stroke={1.5}
                    />
                    <Text>&nbsp;Find us on Instagram!</Text>
                </Button>
            </Container>
        </div>
    );
}
