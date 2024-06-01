import { Link, Navigate } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import { HomeIcon } from "@heroicons/react/24/outline";

export const NotFoundPage = () => {
  return (
    <div className=" flex-center h-screen flex-col bg-transparent">
      <h1 className="text-9xl font-bold">404</h1>
      <span className="text-lg font-semibold">
        This Page is under construction
      </span>
      {/* <span className="text-sm">Please return</span> */}
      <Link to="/">
        <Button
          className="flex-center mt-4 gap-2 px-5 text-white"
          onClick={() => Navigate({ to: "/" })}
        >
          <HomeIcon className="h-6 w-6 " /> Return Home
        </Button>
      </Link>
    </div>
  );
};
