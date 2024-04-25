import { State } from "@/types";

import BigDate from "./BigDate";
import { Task } from "@/types";
import TaskDisplay from "./TaskDisplay";

export default function Menu({
  date,
  tasksState,
}: {
  date: Date;
  tasksState: State<Task[]>;
}) {
  return (
    <div className="flex h-full w-1/3 flex-col items-center gap-10 bg-secondary p-5 font-black text-primary">
      <BigDate date={date} />
      <TaskDisplay taskState={tasksState} />
    </div>
  );
}
