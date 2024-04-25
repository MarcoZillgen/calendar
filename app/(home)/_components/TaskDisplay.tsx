import { State, Task } from "@/types";

export default function TaskDisplay({
  taskState: [tasks, setTasks],
}: {
  taskState: State<Task[]>;
}) {
  return (
    <div className="flex h-3/4 w-full flex-col items-center gap-5">
      <h1 className="text-2xl">Tasks</h1>
      <div className="flex h-full w-full flex-col items-center gap-5 overflow-y-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex h-20 w-full flex-col items-center gap-2 border border-primary p-5"
          >
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
