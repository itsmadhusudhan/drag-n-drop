import { useDroppable } from "@dnd-kit/core";

import Task, { TaskType } from "./Task";

type BoardType = {
  id: string;
  title: string;
  tasks: string[];
};

type Props = {
  board: BoardType;
  tasks: TaskType[];
};

const Board = (props: Props) => {
  const { isOver, active, setNodeRef } = useDroppable({
    id: props.board.id,
  });
  const tasks = props.tasks.filter((task) =>
    props.board.tasks.includes(task.id)
  );

  return (
    <div className="max-w-xs border px-4 py-3 min-w-[300px] h-full min-h-[200px]">
      <header className="border-b pb-2">{props.board.title}</header>
      <div className="py-3 flex flex-col gap-5 h-full" ref={setNodeRef}>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
        {isOver && active?.data.current?.boardId !== props.board.id && (
          <div className="bg-yellow-100 h-10 border border-dashed border-yellow-500"></div>
        )}
      </div>
    </div>
  );
};

export default Board;
