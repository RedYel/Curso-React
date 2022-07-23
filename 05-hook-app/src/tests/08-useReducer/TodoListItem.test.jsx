import { render } from "@testing-library/react";
import TodoListItem from "../../components/08-useReducer/TodoListItem";
describe("Pruebas en <TodoItem/>", () => {
  const todo = {
    id: 1,
    description: "piedra",
    done: false,
  };

  const handleDeleteMock = jest.fn();
  const handleToggleMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

//   test("Debe de mostar el Todo Pendiente de COmpletar", () => {
//     render(
//       <TodoListItem
//         todo={todo}
//         handleToggle={handleToggleMock}
//         handleDelete={handleDeleteMock}
//       />
//     );

//     const liElement = screen.getByRole("listitem");
//     expect(liElement.className).toBe("list-group-item");
//   });

  test("should first", () => {
    ;
  });
});
