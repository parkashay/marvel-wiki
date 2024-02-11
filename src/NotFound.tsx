import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col gap-6 items-center justify-center ">
      <div className="text-3xl text-center">404 | Page Not Found</div>
      <Link to={"/"} className="bg-primary px-4 py-2 border rounded-lg">Go to Home</Link>
    </div>
  );
}

export default NotFound;
