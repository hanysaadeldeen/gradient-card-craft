
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  color: "yellow" | "purple";
  className?: string;
}

const StatCard = ({ value, label, color, className }: StatCardProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-lg p-[1px] flex items-center justify-center",
        "aspect-[3/3.5] min-w-[180px]",
        color === "yellow" ? "gradient-border-yellow" : "gradient-border-purple",
        className
      )}
    >
      <div className="bg-[#1c1c22] absolute inset-[1px] rounded-lg flex flex-col items-center justify-center">
        <span 
          className={cn(
            "text-5xl md:text-6xl font-bold mb-2",
            color === "yellow" ? "text-[#f0e43a]" : "text-[#a898ff]"
          )}
        >
          {value}
        </span>
        <span className="text-gray-300 text-sm md:text-base">{label}</span>
      </div>
    </div>
  );
};

export default StatCard;
