import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import '@testing-library/jest-dom/extend-expect';


describe("NavBar component", () => {
    test("renders logo with correct alt text", () => {
        render(<NavBar />);
        const logoImage = screen.getByAltText("Space X Capsules Database - Logo");
        expect(logoImage).toBeInTheDocument();
    });

    test("renders navigation title", () => {
        render(<NavBar />);
        const navigationTitle = screen.getByText("Capsules Database");
        expect(navigationTitle).toBeInTheDocument();
    });

    test("renders official site button", () => {
        render(<NavBar />);
        const officialSiteLink = screen.getByRole("link", { name: "Official Site" });
        expect(officialSiteLink).toBeInTheDocument();
        expect(officialSiteLink).toHaveAttribute("href", "https://www.spacex.com/");
    });
});
