import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

import Board from "./Board";
import { boards, tasks } from "./data";

const App = () => {
  const [currentBoards, setCurrentBoards] = useState(boards);
  const [currentTasks, setCurrentTasks] = useState(tasks);

  function handleDragEnd(event: DragEndEvent) {
    const droppable = event.over?.id;
    const taskId = event.active.id;
    const sourceBoardId = event.active.data.current?.boardId;

    if (
      !droppable ||
      !sourceBoardId ||
      !taskId ||
      !event.over ||
      sourceBoardId === droppable
    )
      return;

    setCurrentTasks((prev) => {
      return prev.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            boardId: droppable!,
          };
        }

        return task;
      });
    });

    setCurrentBoards((prev) => {
      return prev.map((board) => {
        if (board.id === sourceBoardId) {
          return {
            ...board,
            tasks: board.tasks.filter((id) => id !== taskId),
          };
        }

        if (board.id === droppable) {
          return {
            ...board,
            tasks: [...board.tasks, taskId],
          };
        }

        return board;
      });
    });
  }

  return (
    <div className="flex item-start gap-5 p-6 select-none h-screen">
      <DndContext onDragEnd={handleDragEnd}>
        {currentBoards.map((board) => {
          return <Board key={board.id} board={board} tasks={currentTasks} />;
        })}
      </DndContext>
    </div>
  );
};

export default App;
