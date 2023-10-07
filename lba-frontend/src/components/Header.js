import { useState } from "react";
import { Container, Group, Image } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";

const links = [
    { link: "", label: "Home" },
    { link: "/about", label: "About" },
];

export function Header() {
    // const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Image src="logo.png" h={100}></Image>
                <Group gap={20} visibleFrom="xs">
                    {items}
                </Group>
            </Container>
        </header>
    );
}
