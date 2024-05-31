import { UserIcon } from "@heroicons/react/24/solid";

import { Link, NavLinkProps } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import { Button } from "../common/Button/Button";
import { SearchBox } from "../SearchBox/SearchBox";

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
    <div className="fixed top-0 z-10 flex w-full items-center justify-between bg-black p-3">
      <div className="flex justify-center gap-4 ">
        <Link
          to="/"
          title="MOVIES+"
          className="w-36 bg-black  text-center text-white hover:text-white active:text-white "
        >
          <strong className=" text-2xl">
            My Movies<sup>+</sup>
          </strong>
        </Link>
        {NAVBAR_ITEMS.map((item, idx) => {
          return <NavItem item={item} key={idx} />;
        })}
      </div>
      <div className="">
        <SearchBox />
      </div>
    </div>
  );
}
