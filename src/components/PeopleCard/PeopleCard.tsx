import { CreditCast } from "../../services/credit/credit.type";
import createImgUrl from "../../utils/createImgUrl";

type PeopleCardProp = {
  data: CreditCast;
};

export const PeopleCard = ({ data }: PeopleCardProp) => {
  return (
    <div className=" min-w-40  rounded-lg bg-white">
      <div id="card-image" className=" min-h-60">
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
  );
};
