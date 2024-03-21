import { useDraggable } from "@dnd-kit/core";
import { cn } from "./lib/utils";

export type TaskType = {
  id: string;
  title: string;
  description: string;
  boardId: string;
};

type Props = {
  task: TaskType;
};

const Task = (props: Props) => {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: props.task.id,
    data: {
      boardId: props.task.boardId,
    },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn("bg-blue-100 shadow-sm cursor-pointer p-2")}
    >
      <p>{props.task.title}</p>
    </div>
  );
};

export default Task;
