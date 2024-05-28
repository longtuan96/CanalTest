import { UserIcon } from "@heroicons/react/24/solid";

import { Link, NavLinkProps } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import { Button } from "../common/Button/Button";

const NAVBAR_ITEMS: NavLinkProps[] = [
  {
    to: "/shows",
    children: "TV Shows",
  },
  {
    to: "/trending",
    children: "New & Popular",
  },
  {
    to: "/my-list",
    children: "My List",
  },
];

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black p-3 fixed top-0 z-10 w-full">
      <div className="flex justify-center gap-4 ">
        <Link
          to="/"
          title="MOVIES+"
          className="text-white hover:text-white  active:text-white bg-black text-center w-36 "
        >
          <strong className=" text-2xl">
            My Movies<sup>+</sup>
          </strong>
        </Link>
        {NAVBAR_ITEMS.map((item, idx) => {
          return <NavItem item={item} key={idx} />;
        })}
      </div>
      <div className="flex items-center gap-4">
        <Button size="sm">Join Now</Button>
        <button
          className="rounded-full bg-zinc-100 text-zinc-600 p-2"
          title="User name"
        >
          <UserIcon className="w-4 h-4" title="User Name" />
        </button>
      </div>
    </div>
  );
}
