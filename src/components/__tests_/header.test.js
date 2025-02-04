import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test("should render Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loggedinButton = screen.getByRole("button", { name: "Login" });
    // const loggedinButton = screen.getByText("Login");
    expect(loggedinButton).toBeInTheDocument();
})

test("should change login to logout on click ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loggedinButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loggedinButton);
    const loggedoutButton = screen.getByRole("button", { name: "Logout" });
    expect(loggedoutButton).toBeInTheDocument();
})

test("should render Header component with a Card Item 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    // const cardItems = screen.getByText("Cart - (0 Items)");
    const cardItems = screen.getByText(/Cart/);
    expect(cardItems).toBeInTheDocument();
})