import { CreditCast } from "../../services/credit/credit.type";
import createImgUrl from "../../utils/createImgUrl";

type PeopleCardProp = {
  data: CreditCast;
  variation?: "primary" | "secondary";
};

export const PeopleCard = ({ data, variation = "primary" }: PeopleCardProp) => {
  return variation === "primary" ? (
    <div className="rounded-lg bg-white" style={{ minWidth: "20%" }}>
      <div id="card-image" className="min-h-fit w-full">
        <img
          className="h-full w-full rounded-t-lg object-fill"
          alt={data.name}
          src={createImgUrl("people", data.profile_path)}
        />
      </div>
      <div id="card-content" className="flex flex-col rounded-b-md text-black">
        <strong className="px-2">{data.name}</strong>
        <span className="px-2 text-sm">{data.character}</span>
      </div>
    </div>
  ) : (
    <div style={{ minWidth: "30%" }}>
      <img
        className="h-full w-full rounded-lg object-fill"
        alt={data.name}
        src={createImgUrl("people", data.profile_path)}
      />
    </div>
  );
};
