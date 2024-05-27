import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  size: string;
};

export const Button = ({ className, children, size }: ButtonProps) => {
  return (
    <button
      className={clsx("bg-red-600", size === "sm" && "text-sm", className)}
    >
      {children}
    </button>
  );
};
