import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";

jest.mock("../../hooks/useFetch");

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

  test("Debe mostrar un quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      loading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    screen.debug();
  });
});
