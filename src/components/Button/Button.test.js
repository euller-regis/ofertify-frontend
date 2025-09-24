import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { userEvent } from "@testing-library/user-event";

describe("Button", () => {
    it("renders the button with the given text", () => {
        render(<Button variant="primary" text="my button" />);
        expect(screen.getByText("my button")).toBeVisible();
    });

    it("renders the button disabled if the prop is given", () => {
        render(<Button variant="primary" text="my button" disabled />);
        expect(screen.getByText("my button")).toBeDisabled();
    });

    it("executes the callback function when clicked", async () => {
        const mockFunction = jest.fn();
        render(
            <Button
                variant="secondary"
                onClick={mockFunction}
                text="my button"
            />
        );
        await userEvent.click(screen.getByRole("button"));
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
});
