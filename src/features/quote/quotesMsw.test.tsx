import { setupServer } from "msw/node";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Cita from "./Cita";
import handlers from "../../mocks/handlers";
import citaSlice from "../quote/citaSlice";
import { configureStore } from "@reduxjs/toolkit";

const server = setupServer(...handlers);

const store = configureStore({
    reducer: {
        cita: citaSlice,
    },
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Cita component", () => {
    it("Should renders a quote from the API", async () => {
        render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

        const input = screen.getByLabelText("Author Cita");
        fireEvent.change(input, { target: { value: "Nelson" } });
        const button = screen.getByLabelText("Obtener Cita");
        fireEvent.click(button);

        const quoteElement = await screen.findByText(
            "Hey, I'm the chief here. Bake him away, toys."
        );
        expect(quoteElement).toBeInTheDocument();
        expect(screen.getByText("Chief Wiggum")).toBeInTheDocument();
    });

    it("Should display quote for valid author", async () => {
        render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

        const input = screen.getByLabelText("Author Cita");
        fireEvent.change(input, { target: { value: "Milhouse Van Houten" } });
        const button = screen.getByLabelText("Obtener Cita");
        fireEvent.click(button);

        const quoteElement = await screen.findByText(
            "Hey, I'm the chief here. Bake him away, toys.",
        );
        expect(quoteElement).toBeInTheDocument();
        expect(screen.getByText("Chief Wiggum")).toBeInTheDocument();
    });
});