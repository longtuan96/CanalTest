import { ReactNode, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { AxiosError } from "axios";
import useScrollControl from "../../hooks/useScrollControl";

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
    <div className="flex flex-col gap-2 relative">
      <h4 className="text-2xl font-semibold text-white mx-6 sm:mx-8 md:mx-12">
        {title}
      </h4>
      {!isAtStart && (
        <button className="absolute bg-black bg-opacity-50 shadow-md backdrop-blur p-2 z-10 rounded left-2 top-1/2 -translate-y-1/2">
          <ArrowLeftIcon
            className="w-6 h-6"
            title="scroll left"
            onClick={scroll.bind(null, true)}
          />
        </button>
      )}
      {!isAtEnd && (
        <button className="absolute bg-black bg-opacity-50 shadow-md backdrop-blur p-2 z-10 rounded right-2 top-1/2 -translate-y-1/2">
          <ArrowRightIcon
            className="w-6 h-6"
            title="scroll right"
            onClick={scroll.bind(null, false)}
          />
        </button>
      )}
      <div
        ref={scrollDivRef}
        className="flex flex-row gap-6 overflow-x-auto py-2 px-6 sm:px-8 md:px-12 relative scrollbar-hide"
      >
        {!!error && <span>{"Fetch Data failed!"}</span>}
        {children}
      </div>
    </div>
  );
}
