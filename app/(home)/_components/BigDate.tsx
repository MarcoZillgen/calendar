export default function BigDate({ date }: { date: Date }) {
  return (
    <div className="flex flex-col items-center gap-0 text-[200px] font-black">
      <span className="w-fit">
        {
          date
            .toLocaleDateString("en-GB", { day: "2-digit", month: "short" })
            .toUpperCase()
            .split(" ")[0]
        }
      </span>
      <span className="w-fit">
        {
          date
            .toLocaleDateString("en-GB", { day: "2-digit", month: "short" })
            .toUpperCase()
            .split(" ")[1]
        }
      </span>
    </div>
  );
}
