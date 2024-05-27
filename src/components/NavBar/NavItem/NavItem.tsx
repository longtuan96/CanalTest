import { NavLink, NavLinkProps } from "react-router-dom";
import clsx from "clsx";

type NavProps = {
  item: NavLinkProps;
};

export default function ({ item }: NavProps) {
  return (
    <NavLink
      key={item.to.toString()}
      className={({ isActive }) =>
        clsx(
          "text-white hover:text-gray-400  active:text-white leading-9",
          isActive ? "opacity-100 font-bold" : "opacity-50 font-light",
          "transition-all",
        )
      }
      title={item.title ?? item.children?.toString()}
      {...item}
    />
  );
}
