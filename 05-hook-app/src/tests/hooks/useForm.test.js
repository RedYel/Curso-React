import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas den useForm", () => {
  const initialForm = {
    name: "Leyder",
    email: "lele@gmail.com",
  };

  test("Debe regresar un formalrio por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe cambiar el valor de formulario (Cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "email",
          value: "leyder@hotmail.com",
        },
      });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, email: "leyder@hotmail.com" });
  });

  test("Debe reestablecer el formulario con reset", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "email",
          value: "leyder@hotmail.com",
        },
      });

      reset();
    });

    const [formValues] = result.current;

    expect(formValues).toEqual(initialForm);
  });
});
