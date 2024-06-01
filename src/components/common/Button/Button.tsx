import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  background?: boolean;
};

export const Button = ({
  className,
  children,
  onClick,
  background = true,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        " min-w-52 rounded-md bg-red-600 p-2  hover:bg-red-400 ",
        background
          ? "bg-red-600 hover:bg-red-400"
          : "border-red-600 bg-transparent hover:border-red-600 hover:bg-transparent",

        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
