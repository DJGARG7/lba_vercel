import { Card, Image, Text } from "@mantine/core";

export function CategoryCard({ title, imageUrl, endpoint }) {
    return (
        <Card shadow="sm" padding="lg">
            <Card.Section component="a" href={endpoint}>
                <Image
                    src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaCdbT6KpJ2GgWLUqIR5Fgq8npHWSRCI5icajbIySDc_F0TdRsBaaDxKURqX0soG436tUh9xSMms3a8Uqn-OT7MmMmBzCA=w1920-h947"
                    h={250}
                    alt="No way!"
                />
            </Card.Section>

            <Text fw={500} size="lg" mt="md" mx={"auto"}>
                {title}
            </Text>
        </Card>
    );
}
