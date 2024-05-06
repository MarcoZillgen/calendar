import { Task } from "@/types";

export default function Day({
  num,
  selected = false,
  today = false,
  thisMonth = true,
  tasks = [],
  ...props
}: {
  num: number;
  selected?: boolean;
  today?: boolean;
  thisMonth?: boolean;
  tasks?: Task[];
} & React.HTMLAttributes<HTMLDivElement> & {
    onClick?: () => void;
  }) {
  return (
    <div
      {...props}
      className={`relative grid size-32 cursor-pointer select-none place-items-center text-[48px] font-black
        ${today && "rounded-[50px] bg-secondary"}
        ${selected && "rounded-[50px] !bg-tertiary"}
        ${!thisMonth && " opacity-50"}
      `}
    >
      <span
        className={`${today || selected ? "text-primary" : "text-secondary"}`}
      >
        {num < 10 ? `0${num}` : num}
      </span>
      {!today && !selected && (
        <div className="absolute bottom-0 left-0 flex h-3 w-full gap-1 overflow-hidden">
          <div className="min-w-0 w-full rounded-full bg-secondary"></div>

          {tasks.map((task: Task, i) => {
            return (
              <div
                key={i}
                className="min-w-3 w-5 rounded-full"
                style={{ backgroundColor: task.color }}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
}
