/** @jest-environment jsdom */
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../tests-utils";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/server";
import Cita from "./Cita";
import "whatwg-fetch";
import "@testing-library/jest-dom";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Cita component", () => {
    describe("When rendering a random quote", () => {
        it("should render quote component", async () => {
            render(<Cita />);
            expect(
                screen.getByPlaceholderText("Ingresa el nombre del autor")
            ).toBeVisible();
            expect(screen.getByLabelText("Obtener cita aleatoria")).toBeEnabled();
            expect(screen.getByLabelText("Borrar")).toBeEnabled();
        });
        it("should click the random quote button and fetch the data", async () => {
            render(<Cita />);
            await userEvent.click(screen.getByLabelText("Obtener cita aleatoria"));
            expect((await screen.findAllByText("CARGANDO...")).length).toBeGreaterThan(
                0
            );
        });
        it("should render a random quote", async () => {
            expect(
                screen.queryByText("Hey, I'm the chief here. Bake him away, toys.")
            ).not.toBeInTheDocument();
        });
        it("should not render a random a not found quote message", async () => {
            expect(
                screen.queryByText("No se encontro ninguna cita")
            ).not.toBeInTheDocument();
        });
    });

    describe("When rendering a random quote by character", () => {
        it("should render a quote from the character typed in the input", async () => {
            render(<Cita />);
            const input = screen.getByLabelText("Author Cita");
            userEvent.clear(input);
            fireEvent.change(input, { target: { value: "lisa" } });
            expect(input).toHaveDisplayValue("lisa");
            await userEvent.click(screen.getByLabelText("Obtener Cita"));
            expect(
                (
                    await screen.findAllByText(
                        "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will."
                    )
                ).length
            ).toBeGreaterThan(0);
        });
    });

    describe("When click delete button", () => {
        it("should render the placeholder in the input", async () => {
            render(<Cita />);
            await userEvent.click(screen.getByLabelText("Borrar"));
            expect(screen.getByLabelText("Author Cita")).toHaveValue("");
            expect(
                (await screen.findAllByText("No se encontro ninguna cita")).length
            ).toBeGreaterThan(0);
        });
    });

    describe("When the user introduce numbers", () => {
        it("should render an error message", async () => {
            render(<Cita />);
            const input = screen.getByLabelText("Author Cita");
            userEvent.clear(input);
            fireEvent.change(input, { target: { value: "1" } });
            expect(input).toHaveDisplayValue("1");
            await userEvent.click(screen.getByLabelText("Obtener Cita"));
            expect(
                (await screen.findAllByText("Por favor ingrese un nombre válido"))
                    .length
            ).toBeGreaterThan(0);
        });
    });
});