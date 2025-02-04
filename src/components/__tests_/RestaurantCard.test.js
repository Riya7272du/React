import { render, screen } from "@testing-library/react"; // Added 'screen' import
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardmock.json";
import "@testing-library/jest-dom";

test("should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Burger King");
    expect(name).toBeInTheDocument();
});