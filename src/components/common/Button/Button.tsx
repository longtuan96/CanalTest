import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
};

export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "border-none bg-red-600 hover:border-none hover:bg-red-400",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
