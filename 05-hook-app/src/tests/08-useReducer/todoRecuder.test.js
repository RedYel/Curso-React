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
      payload: [
        {
          id: 2,
          description: "nuevo Todo #2",
          done: false,
        },
      ],
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("Debe eliminar un todo", () => {
    const action = {
      type: "delete",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("Debe de realizar el Toogle del ToDo", () => {
    const action = {
      type: "toggle",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);
  });
});
