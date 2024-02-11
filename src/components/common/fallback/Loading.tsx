import { CircleOff } from "lucide-react"

function Loading() {
  return (
    <div className="bg-primary/50 backdrop-blur-sm py-6 px-3 flex items-center justify-center">
        <CircleOff className="animate-spin duration-1000" size={50} />
    </div>
  )
}

export default Loading