import { ReactNode, useEffect } from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { AxiosError } from "axios";
import useScrollControl from "../../../hooks/useScrollControl";

export type HorizontalListProps = {
  title: string;
  children?: ReactNode;
  error?: AxiosError | unknown;
};

export default function HorizontalList(props: HorizontalListProps) {
  const { title, children, error } = props;
  const {
    ref: scrollDivRef,
    isAtStart,
    isAtEnd,
    scroll,
    checkScroll,
  } = useScrollControl();

  useEffect(() => {
    checkScroll();
  }, [checkScroll, children]);

  return (
    <div className="relative flex flex-col gap-2">
      <h4 className="mx-6 text-2xl font-semibold text-white sm:mx-8 md:mx-12">
        {title}
      </h4>
      {!isAtStart && (
        <button className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 shadow-md backdrop-blur">
          <ChevronDoubleLeftIcon
            className="h-6 w-6"
            title="scroll left"
            onClick={scroll.bind(null, true)}
          />
        </button>
      )}
      {!isAtEnd && (
        <button className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 shadow-md backdrop-blur">
          <ChevronDoubleRightIcon
            className="h-6 w-6"
            title="scroll right"
            onClick={scroll.bind(null, false)}
          />
        </button>
      )}
      <div
        ref={scrollDivRef}
        className="scrollbar-hide relative flex flex-row gap-6 overflow-x-auto px-6 py-2 sm:px-8 md:px-12"
      >
        {!!error && <span>{"Fetch Data failed!"}</span>}
        {children}
      </div>
    </div>
  );
}
