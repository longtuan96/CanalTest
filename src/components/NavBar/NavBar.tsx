import { Link, NavLinkProps, useLocation } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import { SearchBox } from "../SearchBox/SearchBox";
import { useEffect, useState } from "react";

export const NAVBAR_ITEMS: NavLinkProps[] = [
  {
    to: "/shows",
    children: "TV Shows",
  },
  {
    to: "/people",
    children: "People",
  },
  {
    to: "/more",
    children: "More",
  },
];

export default function Navbar() {
  const loc = useLocation();
  const [opacity, setOpacity] = useState(loc.pathname !== "/movie" ? 1 : 0);

  const handleScroll = (e: Event) => {
    e.preventDefault();
    const { outerHeight } = window;
    if (loc.pathname !== "/movie") setOpacity(1);
    setOpacity((scrollY / outerHeight) * 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));
    return () => {
      window.removeEventListener("scroll", (e) => handleScroll(e));
    };
  }, []);

  return (
    <div
      className={`bg bg-black/ fixed top-0 z-20 flex w-full items-center justify-between p-3`}
      style={{
        backgroundColor: `rgb(0,0,0,${loc.pathname === "/movie" ? opacity : 1})`,
      }}
    >
      <div className="flex justify-center gap-4 ">
        <Link
          to="/movie"
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
