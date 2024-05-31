import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  background?: boolean;
  variation?: "primary" | "secondary";
};

export const Button = ({
  className,
  children,
  onClick,
  background = true,
  variation = "primary",
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        " bg-red-600 hover:border-none hover:bg-red-400 focus:outline-none",
        background
          ? "bg-red-600 hover:bg-red-400"
          : "bg-transparent hover:bg-transparent",
        variation === "secondary"
          ? "border-red-600 bg-transparent"
          : "border-none",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
