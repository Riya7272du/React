import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("contact us page test case", () => {
    test("should load contact us component ", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    test("should load button inside Contact component ", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    test("should submit button inside Contact component ", () => {
        render(<Contact />);
        const submit = screen.getByText("Submit");
        expect(submit).toBeInTheDocument();
    });

    test("should load 2 input boxes on the contact component", () => {
        render(<Contact />);
        // const inputBoxes = screen.getAllByRole("input");
        const inputBoxes = screen.getAllByRole("textbox");

        expect(inputBoxes.length).toBe(2);

    });
})

