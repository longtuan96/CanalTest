import { ReactNode, useState } from "react";

type ShowMoreListProps = {
  children: ReactNode;
  title: string;
};

export const ShowMoreList = ({ title, children }: ShowMoreListProps) => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <h1>{title}</h1>
      <div
        className={`grid ${showMore ? "h-fit" : " h-72"} mt-4 grid-cols-8 gap-5 overflow-hidden`}
      >
        {children}
      </div>
      <div className="mt-4 flex w-full justify-center">
        <button className="" onClick={() => handleShowMore()}>
          {!showMore ? "Show More" : "Show Less"}
        </button>
      </div>
    </>
  );
};
