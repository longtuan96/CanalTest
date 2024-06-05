import { Link, Navigate } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import { HomeIcon } from "@heroicons/react/24/outline";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

export const NotFoundPage = () => {
  const isMobile = useCheckMobileScreen();
  return (
    <div className=" flex-center h-screen flex-col bg-transparent">
      <h1 className="pb-10 text-center text-9xl font-bold">
        {isMobile ? "404!" : "Page Not Found!"}
      </h1>
      <Link to="/">
        <Button className="flex-center" onClick={() => Navigate({ to: "/" })}>
          <HomeIcon className="size-6" />
        </Button>
      </Link>
    </div>
  );
};
