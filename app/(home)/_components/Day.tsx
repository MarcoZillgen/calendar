import { Appointment } from "@/types";

export default function Day({
  num,
  selected = false,
  today = false,
  thisMonth = true,
  appointments = [],
  ...props
}: {
  num: number;
  selected?: boolean;
  today?: boolean;
  thisMonth?: boolean;
  appointments?: Appointment[];
} & React.HTMLAttributes<HTMLDivElement> & {
    onClick?: () => void;
  }) {
  return (
    <div
      {...props}
      className={`relative grid place-items-center size-32 cursor-pointer text-[48px] font-black select-none
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
        <div className="absolute bottom-0 left-0 w-full h-3 rounded-full bg-secondary"></div>
      )}
    </div>
  );
}
