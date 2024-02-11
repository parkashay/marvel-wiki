import { cn } from "@/lib/utils";
import { CircleOff } from "lucide-react";

function Loading() {
  return (
    <div
      className={cn(
        "absolute top-0 bottom-0 bg-primary w-full h-screen z-40 backdrop-blur-sm py-6 px-3 flex items-center justify-center"
      )}
    >
      <CircleOff className="animate-spin duration-1000" size={50} />
    </div>
  );
}

export default Loading;
