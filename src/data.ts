import { nanoid } from "nanoid";

const tasks = [
  {
    id: nanoid(),
    title: "Learn React",
    description: "Learn React",
    boardId: "ONE",
  },
  {
    id: nanoid(),
    title: "Learn TypeScript",
    description: "Learn TypeScript",
    boardId: "ONE",
  },
  {
    id: nanoid(),
    title: "Learn Redux",
    description: "Learn Redux",
    boardId: "TWO",
  },
  {
    id: nanoid(),
    title: "Learn React Router",
    description: "Learn React Router",
    boardId: "TWO",
  },
  {
    id: nanoid(),
    title: "Learn Firebase",
    description: "Learn Firebase",
    boardId: "THREE",
  },
  {
    id: nanoid(),
    title: "Learn GraphQL",
    description: "Learn GraphQL",
    boardId: "THREE",
  },
];

const boards = [
  {
    id: "ONE",
    title: "To Do",
    tasks: tasks
      .filter((task) => task.boardId === "ONE")
      .map((task) => task.id),
  },
  {
    id: "TWO",
    title: "In Progress",
    tasks: tasks
      .filter((task) => task.boardId === "TWO")
      .map((task) => task.id),
  },
  {
    id: "THREE",
    title: "Done",
    tasks: tasks
      .filter((task) => task.boardId === "THREE")
      .map((task) => task.id),
  },
];

export { tasks, boards };
