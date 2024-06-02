import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  background?: boolean;
  bordered?: boolean;
};

export const Button = ({
  className,
  children,
  onClick,
  background = true,
  bordered = false,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        " min-w-52 rounded-md bg-red-600 p-2  hover:bg-red-400 ",
        background
          ? "bg-red-600 text-white hover:bg-red-400"
          : "border-2 border-red-600 bg-transparent text-black hover:border-red-600 hover:bg-transparent",
        bordered ? "" : "border-none",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
