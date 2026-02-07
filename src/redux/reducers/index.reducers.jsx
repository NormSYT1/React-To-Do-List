import { ADD, CLEAR, TOGGLE, ALLCLEAR } from "../type/index.types";

const INITIAL_STATE = {
  notes: [
    { id: 1, todo: "React Proje", completed: false },
    { id: 2, todo: "Yazılım Sitesi", completed: true },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ADD:
  if (!action.payload || !action.payload.trim()) {
    return state;
  }
  const newTodo = action.payload.trim().toLowerCase();
  const isExist = state.notes.some(
    note => note.todo.toLowerCase() === newTodo
  );
  if (isExist) {
    return state; 
  }
  return {
    ...state,
    notes: [
      ...state.notes,
      {
        id: Date.now(),
        todo: action.payload.trim(),
        completed: false,
      },
    ],
  };

    case TOGGLE:
      return {
        ...state,
        notes:  state.notes.map(note =>
          note.id === action.payload
            ? { ...note, completed: !note.completed }
            : note
        ),
      };

    case CLEAR:
      return {
        ...state, notes: state.notes.filter((note) => 
          note.completed === false)
    };

    case ALLCLEAR:
      return {
        ...state,
        notes: [],
    };
    default:
      return state;
  }
};

export default reducer;
