import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetailMockData } from "../../services/movie/movie.mock";
import { MovieDetailResponse } from "../../services/movie/movie.type";
import createImgUrl from "../../utils/createImgUrl";
import { InfoSection } from "./InfoSection/InfoSection";
import { GetCreditResponse } from "../../services/credit/credit.type";
import { creditMockData } from "../../services/credit/credit.mock";
import HorizontalList from "../../components/common/HorizontalList/HorizontalList";
import { PeopleCard } from "./PeopleCard/PeopleCard";
import { ShowMoreList } from "../../components/common/ShowMoreList/ShowMoreList";
import { Loader } from "../../components/common/Loader/Loader";
import { useGetMovieDetail } from "../../services/movie/movie";
import { useGetCredit } from "../../services/credit/credit";

export const DetailPage = () => {
  const { movieId } = useParams();

  const resultMovieDetail = useGetMovieDetail({ movieId });
  const resultCredit = useGetCredit({ movieId });

  if (resultMovieDetail.isPending && resultCredit.isPending) {
    return (
      <div className="flex-center h-screen w-screen bg-black opacity-80">
        <Loader />
      </div>
    );
  }

  return (
    <div
      className="relative flex h-screen w-screen justify-center bg-cover"
      style={{
        backgroundImage: `url(${createImgUrl("movie", resultMovieDetail.data?.backdrop_path)})`,
      }}
    >
      <div className=" absolute left-0 top-0 z-10  grid h-full  grid-cols-11 px-24 py-32">
        <InfoSection data={resultMovieDetail.data} />
        <div className=" col-span-1"></div>
        <ShowMoreList title="The Casts">
          {resultCredit.data?.cast.map((item) => (
            <PeopleCard key={item.id} data={item} />
          ))}
        </ShowMoreList>
      </div>
      <div
        id="detail-mask"
        className=" absolute left-0 top-0 h-full w-full  bg-black opacity-60"
      ></div>
    </div>
  );
};
