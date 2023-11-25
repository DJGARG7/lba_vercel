import { Container, rem, Button, Text } from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";
import classes from "./Footer.module.css";

export function Footer() {

    const submitListener = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const product = e.target[1].value; //set this to the product selected
        const phone = e.target[2].value; // set this to owner's phone from env variables.
        const whatsappTextParam = encodeURIComponent(`Hi, My name is ${name}. I am interested in the product ${product}`);
        const whatsappURL = `https://wa.me/${phone}?text=${whatsappTextParam}`
        window.open(whatsappURL,'_blank')    
    }


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
            <h2>Interested to Buy? Please fill details and submit</h2>
    <form id="myForm" onSubmit={submitListener}>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/><br/><br/>

        <label for="product">Product:</label>
        <input type="text" id="product" name="product" required/><br/><br/>

        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone"/><br/><br/>
        
        <input type="submit" value="Submit"/>
    </form>
        </div>
    );
}
