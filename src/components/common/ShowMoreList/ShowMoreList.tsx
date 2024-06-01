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
    <div className="col-span-5 w-full">
      <h1 className="fontsize-subtitle">{title}</h1>
      <div
        className={`mt-4  grid grid-cols-4 gap-5 overflow-scroll`}
        style={{ height: "264px" }}
      >
        {children}
      </div>
      <div className="mt-4 flex w-full justify-center">
        <button className="" onClick={() => handleShowMore()}>
          {!showMore ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};
