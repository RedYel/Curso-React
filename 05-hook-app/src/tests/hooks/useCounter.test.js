import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("Debe de retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    expect( result.current.counter ).toBe(1);
    expect( typeof result.current.increment ).toBe('function');
    expect( typeof result.current.decrement ).toBe('function');
    expect( typeof result.current.reset ).toBe('function');
  });
});
