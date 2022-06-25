import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("Pruebas en multiple custom hooks", () => {
  //   test("Debe de mostrar el componente por defecto", () => {
  //     render(<MultipleCustomHooks />);
  //     expect(screen.getByText("loading..."));
  //     expect(screen.getByText("BreakingBad Quotes:"));

  //     const nextButton = screen.getAllByRole("button", { name: "Next quote" });
  //     // expect(nextButton.disabled).toBeTruthy();
  //     // expect( nextButton.disabled )
  //     // screen.debug();
  //   });

  const moclIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: moclIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe mostrar un quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      loading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    screen.debug();
    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("Fernando")).toBeTruthy();
  });

  test("Debe llamar la funcion incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      loading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getAllByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);
    expect(moclIncrement).toHaveBeenCalled();
  });
});
