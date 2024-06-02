import { NavLink, NavLinkProps } from "react-router-dom";
import clsx from "clsx";

type NavProps = {
  item: NavLinkProps;
};

export default function NavItem({ item }: NavProps) {
  return (
    <NavLink
      key={item.to.toString()}
      className={({ isActive }) =>
        clsx(
          "leading-9 text-white  hover:text-gray-400 active:text-white",
          isActive ? "font-bold opacity-100" : "font-light opacity-50",
          "transition-all",
        )
      }
      title={item.title ?? item.children?.toString()}
      {...item}
    />
  );
}
