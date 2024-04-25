export default function BigDate({ date }: { date: Date }) {
  return (
    <div className="w-1/3 h-full text-[200px] flex flex-col gap-0 justify-center items-center font-black text-primary bg-secondary">
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
