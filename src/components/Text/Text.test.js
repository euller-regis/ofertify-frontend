import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
    it("displays the given text", () => {
        const textToBeDisplayed = "example";
        render(<Text>{textToBeDisplayed}</Text>);
        expect(screen.getByText(textToBeDisplayed)).toBeVisible();
    });

    it("throws an error if the variant is not supported", () => {
        expect(() => {
            render(<Text variant="test">any text</Text>);
        }).toThrow();
    });

    it("throws an error if the color is not supported", () => {
        expect(() => {
            render(<Text color="test">any text</Text>);
        }).toThrow();
    });
});
