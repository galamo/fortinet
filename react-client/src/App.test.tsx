import React from "react";
import ReactDOM from "react-dom/client";
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import App from './App';
import { Home } from "./components/home"
import { Provider } from "react-redux";
import { store } from "store";


describe("Main - App.tsx", () => {
    test("Render Home without crash", () => {
        render(<Home />)
        const someText = screen.getByText("Home Page Lists")
    })
    test("Render Home without crash data-test-id", async () => {
        render(<Home />)
        const headerPage = screen.getByTestId("homePage")
        expect(headerPage).toBeInTheDocument();
        const button = screen.getByTestId("showImageButton")
        expect(button).toBeInTheDocument();
        const image = screen.queryByTestId("image")
        expect(image).not.toBeInTheDocument()

        // show
        fireEvent.click(button);
        await waitFor(() => {
            screen.getByTestId("image")
        })

        // remove from dom
        fireEvent.click(button);
        await waitFor(() => {
            const imageDisappear = screen.queryByTestId("image")
            expect(imageDisappear).not.toBeInTheDocument()
        })

    })
    test("Validate Header navigation", async () => {
        render(<Provider store={store}>
            <App />
        </Provider>)

        const countriesRoute = screen.getByTestId("route-countries")
        fireEvent.click(countriesRoute);
        await waitFor(() => {
            const countriesHeader = screen.queryByTestId("route-countries")
            expect(countriesHeader).toBeInTheDocument()
        })
    })

})