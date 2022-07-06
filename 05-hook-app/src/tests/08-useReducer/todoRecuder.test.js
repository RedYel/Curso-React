import { todoReducer } from "../../components/08-useReducer/todoReducer";

describe("Preubas todoREducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("Debe regresar el estado incial", () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test("Debe agregar ToDo", () => {
    const action = {
      type: "add",
      payload: [{
        id: 2,
        description: "nuevo Todo #2",
        done: false,
      }],
    };

    const newState = todoReducer(initialState, {});
    expect(newState.length).toBe(1);
  });
});
