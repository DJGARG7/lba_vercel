import { Container, Group, Image } from "@mantine/core";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const links = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
];

export function Header() {
    const items = links.map((link) => (
        <NavLink
            key={link.label}
            className={({ isActive, isPending }) =>
                isPending
                    ? `${classes["link"]} ${classes["link--active"]}`
                    : isActive
                    ? `${classes["link"]} ${classes["link--active"]}`
                    : classes.link
            }
            to={link.link}
        >
            {link.label}
        </NavLink>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Image src={logo} h={100} p={5}></Image>
                <Group gap={20} visibleFrom="xs">
                    {items}
                </Group>
            </Container>
        </header>
    );
}
